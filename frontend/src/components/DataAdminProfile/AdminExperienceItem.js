import axios from 'axios';
import { useEffect, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { GoTrashcan } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';
import { onlyUnique } from '../../helpers';
import Button from '../button/Button';
import StyledForm from '../RegisterUser/StyledForm';

function AdminExperiencesItem() {
  const [formActivate, setFormActivate] = useState(false);
  const [category,setCategory] = useState([]);

  async function getCategories() {
    const { data } = await axios.get('http://localhost:8080/experiences');
    const categories = data.data.map((category) => category.categoria);
    const allCategories = categories.filter(onlyUnique);
    setCategory(allCategories);
  }

  useEffect(() => {
    getCategories();
  },[]);

  return (
    <tr className="sectionData">
      <td>
        <h3>Aqui va lo de dentro de la experiencia</h3>
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
                  <Form.Control type="text"/>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>
                  Ubicación
                  <Form.Control type="text"/>
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
                  <Form.Control type="text"/>
                </Form.Label>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>
                  Nº Participantes
                  <Form.Control type="number"/>
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
                  <Form.Control as='textarea' style={{height: 100 + 'px'}}/>
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
              <Button>ENVIAR</Button>
            </Form>
          </StyledForm>
        </Modal>

        <GoTrashcan />
      </td>
    </tr>
  );
}

export default AdminExperiencesItem;
