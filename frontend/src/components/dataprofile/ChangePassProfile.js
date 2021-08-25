import { useContext, useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { putAxios } from "../../axiosCalls";
import { UserContext } from "../../context/UserContext";
import Button from "../button/Button";
import StyledForm from "../RegisterUser/StyledForm";


function ChangePassProfile({activate, onHideActivate}) {

    const { tokenContent,token } = useContext(UserContext);

    const [dataPass,setDataPass] = useState({
        oldPassword: '',
        newPassword: '',
    });
 
    const [error, setError] = useState('');

    async function performPassword(e) {
        try {
            e.preventDefault();

            await putAxios(`http://localhost:8080/users/${tokenContent?.idUser}/password`, dataPass, token);
            setError('');
        } catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <Modal show={activate} onHide={onHideActivate}>
            <StyledForm>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Contraseña</Modal.Title>
                </Modal.Header>
                <Form className="modalBody" onSubmit={performPassword}>
                    <Form.Group className="formElement">
                        <Form.Label>
                            <span>Contraseña Antigua</span>
                            <Form.Control type='password' placeholder='Antigua Contraseña' onChange={(e) => setDataPass({...dataPass, oldPassword: e.target.value})}/>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className="formElement">
                        <Form.Label>
                            <span>Contraseña Nueva</span>
                            <Form.Control type='password' placeholder='Nueva Contraseña' onChange={(e) => setDataPass({...dataPass, newPassword: e.target.value})}/>
                        </Form.Label>
                    </Form.Group>
                    {error && <div className='errorForm'>{error}</div>}
                    <Button white>Editar Contraseña</Button>
                </Form>
            </StyledForm>
        </Modal>
    )
}

export default ChangePassProfile