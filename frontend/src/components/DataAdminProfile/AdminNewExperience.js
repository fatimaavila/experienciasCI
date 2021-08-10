import { Modal, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledForm from '../RegisterUser/StyledForm';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { onlyUnique } from '../../helpers';
import { getAxios } from '../../axiosCalls';

function AdminNeWExperience() {
  const [formActivate, setFormActivate] = useState(false);
  const [category,setCategory] = useState([]);

  async function getCategories() {
    const { data } = await getAxios('http://localhost:8080/experiences');
    const categories = data.map((category) => category.categoria);
    const allCategories = categories.filter(onlyUnique);
    setCategory(allCategories);
  }

  useEffect(() => {
    getCategories();
  },[]);

  return (
    <div>
      <div onClick={() => setFormActivate(!formActivate)}>
        AÑADIR EXPERIENCIA
      </div>
      <Modal show={formActivate} onHide={() => setFormActivate(!formActivate)}>
      <StyledForm>
            <Modal.Header closeButton>
              <Modal.Title>Añade una nueva experiencia</Modal.Title>
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
              <Button white>ENVIAR</Button>
            </Form>
          </StyledForm>
      </Modal>
    </div>
  );
}
export default AdminNeWExperience;
