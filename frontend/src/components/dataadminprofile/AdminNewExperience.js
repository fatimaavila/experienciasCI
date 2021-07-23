import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminNeWExperience() {
  const [formActivate, setFormActivate] = useState(false);

  return (
    <div>
      <div onClick={() => setFormActivate(!formActivate)}>
        AÑADIR EXPERIENCIA
      </div>
      <Modal show={formActivate} onHide={() => setFormActivate(!formActivate)}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir nueva experiencia</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group>
            <Form.Label>Nombre experiencia</Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Ubicaccion</Form.Label>
            <Form.Control type="text" placeholder="Apellidos" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Categoria</Form.Label>
            <Form.Control type="text" placeholder="..." />
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" placeholder=" €" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nº Participantes</Form.Label>
            <Form.Control type="text" placeholder="Dirección" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha de Inicio</Form.Label>
            <Form.Control type="text" placeholder="Codigo Postal" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Fecha Fin</Form.Label>
            <Form.Control type="text" placeholder="Nombre de Usuario" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Imagen</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Aceptar condiciones de uso</Form.Label>
            <Form.Check type="checkbox" />
          </Form.Group>
          <Button blue>ENVIAR</Button>
        </Form>
      </Modal>
    </div>
  );
}
export default AdminNeWExperience;
