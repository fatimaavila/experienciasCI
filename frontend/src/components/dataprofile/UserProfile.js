import { Form } from 'react-bootstrap';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { putAxios } from '../../axiosCalls';

function UserProfile() {
  const [password, setPassword] = useState('');
  const [useravatar, setAvatar] = useState();
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const { token, tokenContent } = useContext(UserContext);

  let avatar = new FormData();
  avatar.append('photo', file);
  const [dataUser, setDataUser] = useState({});
  const body = {
    name: dataUser.name,
    last: dataUser.last,
    dni: dataUser.dni,
    phone: dataUser.phone,
    address: dataUser.address,
    cp: dataUser.cp,
    username: dataUser.username,
    email: dataUser.email,
    avatar: useravatar,
  };

  console.log(tokenContent?.idUser);
  async function updateUser(event) {
    event.preventDefault();

    try {
      const { data } = await putAxios(
        `http://localhost:8080/users/${tokenContent?.idUser}`,
        body,
        token
      );

      const avatarUrl = data.avatar;
      setAvatar(avatarUrl);

      console.log(avatarUrl);

      setDataUser(data);
    } catch (error) {
      setError(error.response.data.message);
      console.log('error', error.response);
    }
    console.log('error', error);
  }

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  useEffect(() => {});

  return (
    <div>
      <Form onSubmit={updateUser}>
        <Form.Group>
          <Form.Label>Avatar</Form.Label>
          <Form.Control type="file" onChange={onFileChange} />
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
        <Button blue>ENVIAR</Button>
      </Form>
    </div>
  );
}
export default UserProfile;
