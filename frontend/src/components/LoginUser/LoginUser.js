import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginUser() {

    const [formActivate,setFormActivate] = useState(false);

    return (
        < >
            <Button blue activateForm={() => setFormActivate(!formActivate)}>INICIAR SESIÓN</Button>

            <Modal show={formActivate} onHide={() => setFormActivate(!formActivate)}>
                <Modal.Header closeButton>
                    <Modal.Title>Inicio de Sesión</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group>
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control type='text' placeholder='Nombre de Usuario' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type='password' />
                    </Form.Group>
                    <Button blue>Iniciar Sesión</Button>
                </Form>
            </Modal>
        </>
    )
}

export default LoginUser;