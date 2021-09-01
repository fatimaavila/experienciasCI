import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import { GoTrashcan } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';
import { onlyUnique, sqlDateFormat } from '../../helpers';
import Button from '../button/Button';
import StyledForm from '../RegisterUser/StyledForm';
import { v4 as uuidv4 } from 'uuid';
import es from 'date-fns/locale/es';
import { deleteAxios, getAxios, postAxios, putAxios } from '../../axiosCalls';
import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

registerLocale('es', es);

function AdminExperiencesItem({ experience }) {
  const optionsDate = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const dateInit = new Date(experience?.fecha_inicio);
  const dateFinal = new Date(experience?.fecha_fin);

  const INITIAL_VALUES = {
    name: experience?.nombre,
    city: experience?.ciudad,
    category: experience?.categoria,
    price: experience?.precio,
    participants: experience?.num_participantes,
    sDate: dateInit,
    fDate: dateFinal,
    description: experience?.descripcion,
  };

  const [formActivate, setFormActivate] = useState(false);
  const [category, setCategory] = useState([]);
  const { token } = useContext(UserContext);
  const [editDataForm, setEditDataForm] = useState(INITIAL_VALUES);
  const [error, setError] = useState('');
  const [errorDel, setErrorDel] = useState();
  const [expPhoto, setExpPhoto] = useState();
  const [files, setFiles] = useState();

  console.log(error);
  const history = useHistory();

  async function getCategories() {
    const { data } = await axios.get('http://localhost:8080/experiences');
    const categories = data.data.map((category) => category.categoria);
    const allCategories = categories.filter(onlyUnique);
    setCategory(allCategories);
  }

  useEffect(() => {
    getCategories();
    async function getPhotos() {
      const { data } = await getAxios(
        `http://localhost:8080/experiences/${experience?.id}`
      );
      setExpPhoto(data.photos);
    }
    getPhotos();
  }, [experience?.id]);

  const onFileChange = (e) => {
    const file = e.target.files;
    setFiles([...file]);
  };
  console.log('filessssss', files);

  let payload = new FormData();
  files?.map((file) => payload.append('photo', file));

  async function updatePhotos() {
    const { data } = await postAxios(
      `http://localhost:8080/experiences/${experience.id}/photo`,
      payload,
      token
    );
    console.log(data);
  }

  async function putEditInfo(e) {
    e.preventDefault();
    const body = {
      ...editDataForm,
      sDate: sqlDateFormat(
        editDataForm.sDate.toLocaleDateString('es-ES', optionsDate)
      ),
      fDate: sqlDateFormat(
        editDataForm.fDate.toLocaleDateString('es-ES', optionsDate)
      ),
    };
    try {
      await putAxios(
        `http://localhost:8080/experiences/${experience.id}`,
        body,
        token
      );
      if (files?.length > 0) {
        updatePhotos();
      }
      history.go(0);
    } catch (error) {
      setError(error.response.data.message);
    }
  }
  async function deletePhoto(idExp, idPhoto) {
    try {
      const { data } = await deleteAxios(
        `http://localhost:8080/experiences/${idExp}/photo/${idPhoto}`,
        token
      );
      setExpPhoto(data.photos);
      console.log('dataaaaaPHODEL', data);
    } catch (error) {
      setErrorDel(error.response.data.message);
    }
  }

  async function deleteExperience() {
    try {
      const doYouDelete = window.confirm(
        'Estás seguro de que quieres borrar esta experiencia?'
      );

      if (doYouDelete) {
        await deleteAxios(
          `http://localhost:8080/experiences/${experience.id}`,
          token
        );
        history.go(0);
      }
    } catch (error) {
      setErrorDel(error.response.data.message);
    }
  }

  return (
    <>
      <tr className="sectionData">
        <td className="dataInfo">
          <div>
            <h3>{experience?.nombre}</h3>
            <span>Ciudad: {experience?.ciudad}</span>
            <span>Categoría: {experience?.categoria}</span>
            <span>
              {experience?.num_participantes}
              {experience?.num_participantes === 1 ? 'persona' : 'personas'}
            </span>
            <div className="dataInfoRow">
              <span>{dateInit.toLocaleDateString('es-ES', optionsDate)}</span>
              <span>{dateFinal.toLocaleDateString('es-ES', optionsDate)}</span>
            </div>
          </div>
          <span>{experience?.disp === 1 ? 'Disponible' : 'No disponible'}</span>
        </td>
        <td className="buttonsAdmin">
          <MdEdit onClick={() => setFormActivate(!formActivate)} />
          <Modal
            show={formActivate}
            onHide={() => setFormActivate(!formActivate)}
          >
            <StyledForm>
              <Modal.Header closeButton>
                <Modal.Title>Edita la experiencia</Modal.Title>
              </Modal.Header>
              <Form className="modalBody" onSubmit={putEditInfo}>
                <Form.Group className="formElement">
                  <Form.Label>
                    Nombre experiencia
                    <Form.Control
                      type="text"
                      placeholder={experience?.nombre}
                      onChange={(e) =>
                        setEditDataForm({
                          ...editDataForm,
                          name: e.target.value,
                        })
                      }
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <Form.Label>
                    Ubicación
                    <Form.Control
                      type="text"
                      placeholder={experience?.ciudad}
                      onChange={(e) =>
                        setEditDataForm({
                          ...editDataForm,
                          city: e.target.value,
                        })
                      }
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <Form.Label>
                    Categoria
                    <Form.Select
                      onChange={(e) =>
                        setEditDataForm({
                          ...editDataForm,
                          category: e.target.value,
                        })
                      }
                    >
                      {category &&
                        category.map((category) => {
                          return (
                            <option
                              key={uuidv4()}
                              defaultValue={experience.categoria === category}
                            >
                              {category}
                            </option>
                          );
                        })}
                    </Form.Select>
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <Form.Label>
                    Precio
                    <Form.Control
                      type="text"
                      placeholder={experience?.precio + ' €'}
                      onChange={(e) =>
                        setEditDataForm({
                          ...editDataForm,
                          price: e.target.value,
                        })
                      }
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <Form.Label>
                    Nº Participantes
                    <Form.Control
                      type="number"
                      placeholder={experience?.num_participantes}
                      onChange={(e) =>
                        setEditDataForm({
                          ...editDataForm,
                          participants: e.target.value,
                        })
                      }
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <Form.Label>
                    Fecha de Inicio
                    <DatePicker
                      locale="es"
                      dateFormat="dd/MM/yyyy"
                      className="date-picker"
                      selected={editDataForm.sDate}
                      onChange={(date) =>
                        setEditDataForm({ ...editDataForm, sDate: date })
                      }
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <Form.Label>
                    Fecha Fin
                    <DatePicker
                      locale="es"
                      dateFormat="dd/MM/yyyy"
                      className="date-picker"
                      selected={editDataForm.fDate}
                      onChange={(date) =>
                        setEditDataForm({ ...editDataForm, fDate: date })
                      }
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <Form.Label>
                    Descripcion
                    <Form.Control
                      as="textarea"
                      style={{ height: 100 + 'px' }}
                      placeholder={experience?.descripcion}
                      onChange={(e) =>
                        setEditDataForm({
                          ...editDataForm,
                          description: e.target.value,
                        })
                      }
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <ul>
                    {expPhoto?.map((photo, index) => (
                      <li key={index}>
                        <span>{`Foto : ${photo.id}        `}</span>
                        <img
                          width="20%"
                          height="20%"
                          src={photo.photo}
                          alt={photo.id}
                        />

                        <GoTrashcan
                          onClick={() => deletePhoto(experience?.id, photo.id)}
                        />
                      </li>
                    ))}
                  </ul>
                  <Form.Label>
                    Imagen
                    <Form.Control
                      type="file"
                      multiple
                      onChange={onFileChange}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement checkboxForm">
                  <Form.Check type="checkbox" />
                  <Form.Label>Aceptar condiciones de uso</Form.Label>
                </Form.Group>
                {error && <div className="errorForm">{error}</div>}
                <Button white>ENVIAR</Button>
              </Form>
            </StyledForm>
          </Modal>

          <GoTrashcan onClick={() => deleteExperience()} />
        </td>
      </tr>
      {errorDel && <div className="errorForm">{errorDel}</div>}
    </>
  );
}

export default AdminExperiencesItem;
