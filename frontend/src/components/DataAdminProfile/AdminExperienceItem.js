import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import { GoTrashcan } from 'react-icons/go';
import { BsX } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import { onlyUnique, sqlDateFormat } from '../../helpers';
import Button from '../button/Button';
import StyledForm from '../RegisterUser/StyledForm';
import { v4 as uuidv4 } from 'uuid';
import es from 'date-fns/locale/es';
import { deleteAxios, getAxios, postAxios, putAxios } from '../../axiosCalls';
import { UserContext } from '../../context/UserContext';

registerLocale('es', es);

function AdminExperiencesItem({ experience, updateDataExp }) {
  const optionsDate = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const dateInit = new Date(experience?.fecha_inicio);
  const dateFinal = new Date(experience?.fecha_fin);

  const [formActivate, setFormActivate] = useState(false);
  const [category, setCategory] = useState([]);
  const { token } = useContext(UserContext);

  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [cat, setCat] = useState(null);
  const [price, setPrice] = useState(null);
  const [participants, setParticipants] = useState(null);
  const [initDate, setInitDate] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [description, setDescription] = useState(null);

  console.log(dateInit, dateFinal, initDate, finishDate);
  const [error, setError] = useState('');
  const [errorDel, setErrorDel] = useState();
  const [expPhoto, setExpPhoto] = useState();
  const [files, setFiles] = useState();
  const [changeChecked, setChangeChecked] = useState({
    checked: false,
    error: '',
  });

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

  let payload = new FormData();
  files?.map((file) => payload.append('photo', file));
  const oldInitDate = new Date(experience?.fecha_inicio).toLocaleDateString(
    'es-ES',
    optionsDate
  );
  const oldFinishDate = new Date(experience?.fecha_fin).toLocaleDateString(
    'es-ES',
    optionsDate
  );

  const body = {
    name: name !== null ? name : experience?.nombre,
    city: city !== null ? city : experience?.ciudad,
    category: cat !== null ? cat : experience?.categoria,
    price: price !== null ? price : experience?.precio,
    participants:
      participants !== null ? participants : experience?.num_participantes,
    sDate:
      initDate !== ''
        ? sqlDateFormat(initDate.toLocaleDateString('es-ES', optionsDate))
        : sqlDateFormat(oldInitDate),
    fDate:
      finishDate !== ''
        ? sqlDateFormat(finishDate.toLocaleDateString('es-ES', optionsDate))
        : sqlDateFormat(oldFinishDate),
    description: description !== null ? description : experience?.descripcion,
  };
  async function putEditInfo(e) {
    e.preventDefault();

    if (changeChecked.checked === false) {
      setChangeChecked({
        ...changeChecked,
        error:
          'Debes aceptar la condiciones para actualizar los datos de la experiencia',
      });
    } else if (changeChecked.checked === true) {
      try {
        if (files?.length > 0) {
          await postAxios(
            `http://localhost:8080/experiences/${experience.id}/photo`,
            payload,
            token
          );
        }
        const { status } = await putAxios(
          `http://localhost:8080/experiences/${experience.id}`,
          body,
          token
        );

        if (status === 200) {
          const { data } = await getAxios('http://localhost:8080/experiences');
          updateDataExp(data);
        }
        setFormActivate(!formActivate);
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  }

  async function deletePhoto(idExp, idPhoto) {
    try {
      const { data } = await deleteAxios(
        `http://localhost:8080/experiences/${idExp}/photo/${idPhoto}`,
        token
      );
      setExpPhoto(data.photos);
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
        const { status } = await deleteAxios(
          `http://localhost:8080/experiences/${experience.id}`,
          token
        );

        if (status === 200) {
          const { data } = await getAxios('http://localhost:8080/experiences');
          updateDataExp(data);
        }
      }
    } catch (error) {
      setErrorDel(error.response.data.message);
    }
  }

  return (
    <>
      <tr className="sectionData">
        <td className="dataInfo">
          <ul>
            <li>
              <h3>{experience?.nombre}</h3>
            </li>
            <li>Ciudad: {experience?.ciudad}</li>
            <li>Categoría: {experience?.categoria}</li>
            <li className="avaliable">
              <span>{experience?.num_participantes}</span>
              <span>
                {experience?.num_participantes === 1 ? 'Plaza' : 'Plazas'}
              </span>
            </li>
            <li className="dataInfoRow">
              <span>{dateInit.toLocaleDateString('es-ES', optionsDate)}</span>
              <span>{dateFinal.toLocaleDateString('es-ES', optionsDate)}</span>
            </li>
          </ul>
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
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <Form.Label>
                    Ubicación
                    <Form.Control
                      type="text"
                      placeholder={experience?.ciudad}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <Form.Label>
                    Categoria
                    <Form.Select onChange={(e) => setCat(e.target.value)}>
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
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <Form.Label>
                    Nº Participantes
                    <Form.Control
                      type="number"
                      placeholder={experience?.num_participantes}
                      onChange={(e) => setParticipants(e.target.value)}
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
                      selected={initDate ? initDate : dateInit}
                      onChange={(date) => setInitDate(date)}
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
                      selected={finishDate ? finishDate : dateFinal}
                      onChange={(date) => setFinishDate(date)}
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
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement">
                  <span className="labelForm">Foto/s de la experiencia</span>
                  <ul className="photoAdminEdit">
                    {expPhoto?.map((photo, index) => (
                      <li key={index}>
                        <img src={photo.photo} alt={photo.id} />
                        <BsX
                          onClick={() => deletePhoto(experience?.id, photo.id)}
                          className="btnDel"
                          size="1.5rem"
                          color="#FFF"
                        />
                      </li>
                    ))}
                  </ul>
                  <Form.Label>
                    Añadir Foto/s
                    <Form.Control
                      type="file"
                      multiple
                      onChange={onFileChange}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group className="formElement checkboxForm">
                  <Form.Check
                    type="checkbox"
                    onChange={() =>
                      setChangeChecked({
                        ...changeChecked,
                        checked: true,
                      })
                    }
                  />
                  <Form.Label>Aceptar condiciones de uso</Form.Label>
                </Form.Group>
                {changeChecked.error && !changeChecked.checked && (
                  <div className="errorForm">{changeChecked.error}</div>
                )}
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
