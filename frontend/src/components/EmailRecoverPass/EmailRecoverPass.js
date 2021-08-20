import { Form } from "react-bootstrap";
import Button from "../button/Button";
import StyledEmailRecoverPass from "./StyledEmailRecoverPass";

function EmailRecoverPass() {
    return (
        <StyledEmailRecoverPass>
            <Form>
                <Form.Group>
                    <Form.Label>
                        <span>Introduce tu email</span>
                        <Form.Control type='email'/>
                    </Form.Label>
                </Form.Group>
                <Button blue>Enviar</Button>
            </Form>
        </StyledEmailRecoverPass>
    )
}

export default EmailRecoverPass;