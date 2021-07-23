import { Form } from 'react-bootstrap';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserProfile(params) {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Avatar</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Apellidos" />
        </Form.Group>
        <Form.Group>
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" placeholder="DNI" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="text" placeholder="Telefono" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" placeholder="Dirección" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Código Postal</Form.Label>
          <Form.Control type="text" placeholder="Codigo Postal" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control type="text" placeholder="Nombre de Usuario" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Aceptar condiciones de uso</Form.Label>
          <Form.Check type="checkbox" />
        </Form.Group>
        <Button blue>ENVIAR</Button>
      </Form>
    </div>
  );
}
export default UserProfile;
