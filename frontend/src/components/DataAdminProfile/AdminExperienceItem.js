import { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { GoTrashcan } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';
import Button from '../button/Button';
import StyledForm from '../RegisterUser/StyledForm';

function AdminExperiencesItem() {
  const [formActivate, setFormActivate] = useState(false);

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
                <Form.Label>Nombre experiencia</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>Ubicación</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>Categoria</Form.Label>
                <Form.Select>
                  <option value={1}>1</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" placeholder=" €" />
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>Nº Participantes</Form.Label>
                <Form.Control type="text" placeholder="Dirección" />
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>Fecha de Inicio</Form.Label>
                <Form.Control type="text" placeholder="Codigo Postal" />
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>Fecha Fin</Form.Label>
                <Form.Control type="text" placeholder="Nombre de Usuario" />
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className='formElement'>
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" />
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
