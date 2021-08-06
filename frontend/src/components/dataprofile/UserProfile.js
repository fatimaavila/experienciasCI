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
  const { token, tokenContent, userInfo } = useContext(UserContext);

  console.log(userInfo);

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
    avatar: avatar,
  };

  async function updateUser(e) {
    e.preventDefault();

    try {
      const { data } = await putAxios(
        `http://localhost:8080/users/${tokenContent?.idUser}`,
        body,
        token
      );

      const avatarUrl = data.avatar;
      setAvatar(avatarUrl);

      setDataUser(data);
    } catch (error) {
      setError(error.response.data.message);
      console.log('error', error.response);
    }
    console.log('error', error);
  }

<<<<<<< Updated upstream
  const onFileChange = (e) => {
    const file = e.target.files[0];
=======
  const onFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
>>>>>>> Stashed changes
    setFile(file);
  };

  useEffect(() => {});

  console.log(dataUser);

  return (
    < >
      <Form className='modalBody' onSubmit={updateUser}>
        <Form.Group>
          <Form.Label className='editInfoLabel'>
            <span>Avatar</span>
            <Form.Control type="file" onChange={onFileChange} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className='editInfoLabel'>
            <span>Nombre</span>
            <Form.Control
              type="text"
              placeholder={userInfo?.name ? userInfo.name : 'Nombre'}
              value={dataUser.name}
              disabled
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className='editInfoLabel'>
            <span>Apellidos</span>
            <Form.Control
              type="text"
              placeholder="Apellidos"
              value={dataUser.last}
              disabled
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className='editInfoLabel'>
            <span>DNI</span>
            <Form.Control type="text" placeholder="DNI" value={dataUser.dni} />
          </Form.Label>
        </Form.Group>
        <Form.Group className='textareaBox'>
          <Form.Label className='editInfoLabel'>
            <span>Biografía</span>
            <Form.Control as='textarea' style={{height: '200px'}} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className='editInfoLabel'>
            <span>Teléfono</span>
            <Form.Control
              type="text"
              placeholder="Telefono"
              value={dataUser.phone}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className='editInfoLabel'>
            <span>Dirección</span>
            <Form.Control
              type="text"
              placeholder="Dirección"
              value={dataUser.address}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className='editInfoLabel'>
            <span>Código Postal</span>
            <Form.Control
              type="text"
              placeholder="Codigo Postal"
              value={dataUser.cp}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className='editInfoLabel'>
            <span>Nombre de Usuario</span>
            <Form.Control
              type="text"
              placeholder="Nombre de Usuario"
              value={dataUser.username}
              disabled
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className='editInfoLabel'>
            <span>Email</span>
            <Form.Control
              type="email"
              placeholder="Email"
              value={dataUser.email}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className='editInfoLabel'>
            <span>Introduce tu contraseña para confirmar</span>
            <Form.Control type="password" />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <Form.Check type="checkbox" />
            <span>Aceptar condiciones de uso</span>
          </Form.Label>
          <Button blue className='editInfoButton'>EDITAR INFORMACIÓN</Button>
        </Form.Group>
      </Form>
    </>
  );
}
export default UserProfile;
