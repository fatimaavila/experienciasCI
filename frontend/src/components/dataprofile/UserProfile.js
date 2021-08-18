import { Form } from 'react-bootstrap';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { putAxios } from '../../axiosCalls';

function UserProfile() {
  const [password, setPassword] = useState('');

  const [file, setFile] = useState('');
  const [error, setError] = useState();
  const { token, tokenContent, userInfo } = useContext(UserContext);

  const INITIAL_USERINFO = {
    name: userInfo?.nombre,
    last: userInfo?.apellidos,
    dni: userInfo?.dni,
    phone: userInfo?.telefono,
    bio: userInfo?.bio,
    address: userInfo?.direccion,
    postalCode: userInfo?.cp,
    username: userInfo?.username,
    email: userInfo?.email,
    avatar: userInfo?.avatar,
  };

  let avatar = new FormData();
  avatar.append('avatar', file);

  const [dataUser, setDataUser] = useState(INITIAL_USERINFO);

  const body = {
    name: dataUser.name,
    dni: dataUser.dni,
    phone: dataUser.phone,
    address: dataUser.address,
    bio: dataUser.bio,
    cp: dataUser.cp,
    email: dataUser.email,
  };

  console.log(file, avatar);

  async function updateUser(e) {
    e.preventDefault();

    try {
      const { data } = await putAxios(
        `http://localhost:8080/users/${tokenContent?.idUser}`,
        body,
        token
      );

      console.log(data);
      setDataUser(data);
    } catch (error) {
      setError(error.response.data.message);
      console.log('error', error.response);
    }
    console.log('error', error);
  }

  /* const onFileChange = (e) => {
    const file = e.target.files[0];

    setFile(file);
  }; */

  return (
    <>
      <Form className="modalBody" onSubmit={updateUser}>
        {/* <Form.Group>
          <Form.Label className="editInfoLabel">
            <span>Avatar</span>
            <Form.Control type="file" onChange={onFileChange} />
          </Form.Label>
        </Form.Group> */}
        <Form.Group>
          <Form.Label className="editInfoLabel">
            <span>Nombre</span>
            <Form.Control
              type="text"
              placeholder={userInfo?.nombre ? userInfo?.nombre : 'Nombre'}
              onChange={(e) =>
                setDataUser({ ...dataUser, name: e.target.value })
              }
              disabled
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className="editInfoLabel">
            <span>Apellidos</span>
            <Form.Control
              type="text"
              placeholder={userInfo?.apellidos}
              disabled
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className="editInfoLabel">
            <span>DNI</span>
            <Form.Control
              type="text"
              placeholder={userInfo?.dni ? userInfo?.dni : 'DNI'}
              /* onChange={(e) =>
                setDataUser({ ...dataUser, dni: e.target.value })
              } */
              disabled
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="textareaBox">
          <Form.Label className="editInfoLabel">
            <span>Biografía</span>
            <Form.Control
              as="textarea"
              style={{ height: '200px' }}
              placeholder={userInfo?.bio ? userInfo?.bio : 'Biografía'}
              onChange={(e) =>
                setDataUser({ ...dataUser, bio: e.target.value })
              }
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className="editInfoLabel">
            <span>Teléfono</span>
            <Form.Control
              type="text"
              placeholder={userInfo?.telefono ? userInfo?.telefono : 'Teléfono'}
              onChange={(e) =>
                setDataUser({ ...dataUser, phone: e.target.value })
              }
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className="editInfoLabel">
            <span>Dirección</span>
            <Form.Control
              type="text"
              placeholder={
                userInfo?.direccion ? userInfo?.direccion : 'Dirección'
              }
              onChange={(e) =>
                setDataUser({ ...dataUser, address: e.target.value })
              }
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className="editInfoLabel">
            <span>Código Postal</span>
            <Form.Control
              type="text"
              placeholder={userInfo?.cp ? userInfo?.cp : 'Código Postal'}
              onChange={(e) =>
                setDataUser({ ...dataUser, postalCode: e.target.value })
              }
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className="editInfoLabel">
            <span>Nombre de Usuario</span>
            <Form.Control
              type="text"
              placeholder={userInfo?.username}
              disabled
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className="editInfoLabel">
            <span>Email</span>
            <Form.Control
              type="email"
              placeholder={userInfo?.email ? userInfo?.email : 'Email'}
              onChange={(e) =>
                setDataUser({ ...dataUser, email: e.target.value })
              }
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label className="editInfoLabel">
            <span>Introduce tu contraseña para confirmar</span>
            <Form.Control
              type="password"
              placeholder="Confirma tu Contraseña"
            />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <Form.Check type="checkbox" />
            <span>Aceptar condiciones de uso</span>
          </Form.Label>
          <Button blue className="editInfoButton">
            EDITAR INFORMACIÓN
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
export default UserProfile;
