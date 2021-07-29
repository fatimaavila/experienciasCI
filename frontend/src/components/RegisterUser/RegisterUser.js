import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledForm from './StyledForm';
import { postAxios } from '../../axiosCalls';
import { useHistory } from 'react-router-dom';

function RegisterUser() {
  const [formActivate, setFormActivate] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  let history = useHistory();

  function onSubmitRegister(event) {
    event.preventDefault();

    console.log('Email: ', email);
    console.log('password: ', password);
    console.log('user: ', username);
    console.log('name: ', name);
    console.log('last: ', last);

    async function performLogin() {
      try {
        const body = {
          username,
          email,
          password,
          name,
          last,
        };

        const data = await postAxios('http://localhost:8080/users', body);
        console.log('newUser', data, body);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    if (password === password2) {
      performLogin();

      history.push('/registervalidate');
    }
  }

  return (
    <>
      <Button onClickButton={() => setFormActivate(!formActivate)}>
        REGISTRARSE
      </Button>

      <Modal show={formActivate} onHide={() => setFormActivate(!formActivate)}>
        <StyledForm onSubmit={onSubmitRegister}>
          <Modal.Header closeButton>
            <Modal.Title>Registro de Usuario</Modal.Title>
          </Modal.Header>
          <Form className="modalBody">
            <Form.Group className="formElement">
              <Form.Label>
                Nombre
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="formElement">
              <Form.Label>
                Apellidos
                <Form.Control
                  type="text"
                  placeholder="Apellidos"
                  value={last}
                  onChange={(event) => setLast(event.target.value)}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="formElement">
              <Form.Label>
                Nombre de Usuario
                <Form.Control
                  type="text"
                  placeholder="Nombre de Usuario"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="formElement">
              <Form.Label>
                Email
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="formElement">
              <Form.Label>
                Contraseña
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="formElement">
              <Form.Label>
                Confirmar Contraseña
                <Form.Control
                  type="password"
                  value={password2}
                  onChange={(event) => setPassword2(event.target.value)}
                />
              </Form.Label>
            </Form.Group>
            <Form.Group className="formElement checkboxForm">
              <Form.Check type="checkbox" />
              <Form.Label>Aceptar condiciones de uso</Form.Label>
            </Form.Group>
            <Button onClickButton={() => setFormActivate(!formActivate)}>
              ENVIAR
            </Button>
          </Form>
        </StyledForm>
      </Modal>
    </>
  );
}

export default RegisterUser;
