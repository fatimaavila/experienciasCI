import { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { putAxios } from "../../axiosCalls";
import Button from "../button/Button";
import StyledEmailRecoverPass from "./StyledEmailRecoverPass";

function EmailRecoverPass() {

    const [email,setEmail] = useState('');
    const [error,setError] = useState('');

    const history = useHistory();

    const body = {
        email,
    }

    async function recoverPass(e) {
        try {

            e.preventDefault();

            const data = await putAxios('http://localhost:8080/users/password/recover',body);

            console.log(data);

            if (error === 'Error enviando email') {
                history.push({
                  pathname: '/reset-pass',
                  recoverCode: data,
                });
            }

        } catch (error) {
            setError(error.response.data.message);
        }
    }

    console.log(email, error);

    return (
        <StyledEmailRecoverPass>
            <div className='verifyEmail_Pass'>
                <h2>Introduce tu email</h2>
                <Form>
                    <Form.Control 
                        type='email' 
                        placeholder='tuemail@email.com'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <div className='errorForm'>{error}</div>}
                    <Button blue onClickButton={recoverPass}>Enviar</Button>
                </Form>
            </div>
        </StyledEmailRecoverPass>
    )
}

export default EmailRecoverPass;