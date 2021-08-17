import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { GoTrashcan } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';
import { onlyUnique } from '../../helpers';
import Button from '../button/Button';
import StyledForm from '../RegisterUser/StyledForm';

function AdminExperiencesItem({experience}) {
  const [formActivate, setFormActivate] = useState(false);
  const [category,setCategory] = useState([]);

  async function getCategories() {
    const { data } = await axios.get('http://localhost:8080/experiences');
    const categories = data.data.map((category) => category.categoria);
    const allCategories = categories.filter(onlyUnique);
    setCategory(allCategories);
  }

  const optionsDate = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }

  const fechaInicio = new Date(experience?.fecha_inicio).toLocaleDateString('es-ES',optionsDate);
  const fechaFin = new Date(experience?.fecha_fin).toLocaleDateString('es-ES',optionsDate);

  useEffect(() => {
    getCategories();
  },[]);

  return (
    <tr className="sectionData">
      <td className='dataInfo'>
        <div>
          <h3>{experience.nombre}</h3>
          <span>Ciudad: {experience.ciudad}</span>
          <span>Categoría: {experience.categoria}</span>
          <span>{experience.num_participantes} {experience.num_participantes === 1 ? 'persona' : 'personas'}</span>
          <div className='dataInfoRow'>
            <span>{fechaInicio}</span>
            <span>{fechaFin}</span>
          </div>
        </div>
        <span>{experience.disp === 1 ? 'Disponible' : 'No disponible'}</span>
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
            <Form className='modalBody'>
              <Form.Group className='formElement'>
                <Form.Label>
                  Nombre experiencia
                  <Form.Control type="text" placeholder={experience.nombre}/>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>
                  Ubicación
                  <Form.Control type="text" placeholder={experience.direccion}/>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>
                  Categoria
                  <Form.Select>
                    {category && category.map((category) => {
                      return <option key={category}>{category}</option>
                    })}
                  </Form.Select>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>
                  Precio
                  <Form.Control type="text" placeholder={experience.precio}/>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>
                  Nº Participantes
                  <Form.Control type="number" placeholder={experience.num_participantes}/>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>
                  Fecha de Inicio
                  <DatePicker className='date-picker'/>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>
                  Fecha Fin
                  <DatePicker className='date-picker'/>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>
                  Descripcion
                  <Form.Control as='textarea' style={{height: 100 + 'px'}} placeholder={experience.descripcion}/>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>
                  Imagen
                  <Form.Control type='file'/>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement checkboxForm'>
                <Form.Check type="checkbox" />
                <Form.Label>Aceptar condiciones de uso</Form.Label>
              </Form.Group>
              <Button white>ENVIAR</Button>
            </Form>
          </StyledForm>
        </Modal>

        <GoTrashcan />
      </td>
    </tr>
  );
}

export default AdminExperiencesItem;
