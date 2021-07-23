import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledRegisterUser from './StyledRegisterUser';

function RegisterUser() {

    const [formActivate,setFormActivate] = useState(false);

    return (
        < >
            <Button onClickButton={() => setFormActivate(!formActivate)}>REGISTRARSE</Button>

            <Modal show={formActivate} onHide={() => setFormActivate(!formActivate)}>
                <StyledRegisterUser>
                    <Modal.Header closeButton>
                        <Modal.Title>Registro de Usuario</Modal.Title>
                    </Modal.Header>
                    <Form className='modalBody'>
                        <Form.Group className='formElement'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type='text' placeholder='Nombre' />
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control type='text' placeholder='Apellidos' />
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>Nombre de Usuario</Form.Label>
                            <Form.Control type='text' placeholder='Nombre de Usuario' />
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Email' />
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type='password' />
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control type='password' />
                        </Form.Group>
                        <Form.Group className='formElement checkboxForm'>
                            <Form.Check type='checkbox' />
                            <Form.Label>Aceptar condiciones de uso</Form.Label>
                        </Form.Group>
                        <Button>ENVIAR</Button>
                    </Form>
                </StyledRegisterUser>
            </Modal>
        </>
    )
}

export default RegisterUser;

