import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledForm from '../RegisterUser/StyledForm'

function UserComment() {
  const [formActivate, setFormActivate] = useState(false);

  return (
    < >
      <Button blue onClickButton={() => setFormActivate(!formActivate)}>
        AÑADIR COMENTARIO
      </Button>

        <Modal show={formActivate} onHide={() => setFormActivate(!formActivate)}>
          <StyledForm>
            <Modal.Header closeButton>
              <Modal.Title>COMENTA TU EXPERIENCIA</Modal.Title>
            </Modal.Header>
            <Form className='modalBody'>
              <Form.Group className='formElement'>
                <Form.Label>
                  <span>Comentario</span>
                  <Form.Control as='textarea' placeholder="Añade tu comentario" style={{height: '150px'}}/>
                </Form.Label>
              </Form.Group>

              <Button>COMENTAR</Button>
            </Form>
          </StyledForm>
        </Modal>
    </>
  );
}

export default UserComment;
