import { Form } from 'react-bootstrap';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { putAxios } from '../../axiosCalls';

function UserProfile({ userInfo }) {
  const userInitialState = {
    name: userInfo?.nombre,
    last: userInfo?.apellidos,
    dni: userInfo?.dni,
    phone: userInfo?.telefono,
    address: userInfo?.direccion,
    cp: userInfo?.cp,
    username: userInfo?.username,
    email: userInfo?.email,
  };
  const [dataUser, setDataUser] = useState(userInitialState);
  const [password, setPassword] = useState('');
  const { token } = useContext(UserContext);

  async function updateUser() {
    const body = {
      name: dataUser.name,
      last: dataUser.last,
      dni: dataUser.dni,
      phone: dataUser.phone,
      address: dataUser.address,
      cp: dataUser.cp,
      username: dataUser.username,
      email: dataUser.email,
    };

    const { data } = await putAxios(
      `http://localhost:8080/users/${userInfo.idUser}`,
      token,
      body
    );
    setDataUser(data);
  }

  useEffect(() => {});

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Avatar</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={dataUser.name}
            disabled
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellidos"
            value={dataUser.last}
            disabled
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" placeholder="DNI" value={dataUser.dni} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Telefono"
            value={dataUser.phone}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Dirección"
            value={dataUser.address}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Código Postal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Codigo Postal"
            value={dataUser.cp}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de Usuario"
            value={dataUser.username}
            disabled
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={dataUser.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Introduce tu contraseña para confirmar</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Aceptar condiciones de uso</Form.Label>
          <Form.Check type="checkbox" />
        </Form.Group>
        <Button blue onClick={() => updateUser()}>
          ENVIAR
        </Button>
      </Form>
    </div>
  );
}
export default UserProfile;
