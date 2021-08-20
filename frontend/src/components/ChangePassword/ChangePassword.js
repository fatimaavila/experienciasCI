import { Form } from "react-bootstrap";
import StyledChangedPassword from "./StyledChangedPassword";

function ChangePassword() {
    return (
        <StyledChangedPassword>
            <Form>
                <Form.Group>
                    <Form.Label>
                        <span>Nueva Contraseña</span>
                        <Form.Control type='password'/>
                    </Form.Label>
                </Form.Group>
            </Form>
        </StyledChangedPassword>
    )
}

export default ChangePassword;