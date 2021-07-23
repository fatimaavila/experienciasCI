import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserComment() {
  const [formActivate, setFormActivate] = useState(false);

  return (
    <>
      <Button onClickButton={() => setFormActivate(!formActivate)}>
        AÑADIR COMENTARIO
      </Button>

      <Modal show={formActivate} onHide={() => setFormActivate(!formActivate)}>
        <Modal.Header closeButton>
          <Modal.Title>COMENTA TU EXPERIENCIA</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group>
            <Form.Label>Comentario:</Form.Label>
            <Form.Control type="text-area" placeholder="Añade tu comentario" />
          </Form.Group>

          <Button blue>COMENTAR</Button>
        </Form>
      </Modal>
    </>
  );
}

export default UserComment;
