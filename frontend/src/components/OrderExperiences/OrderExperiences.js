import { Form } from 'react-bootstrap';
import StyledOrderExperiences from './StyledOrderExperiences';

function OrderExperiences() {
    return (
        <StyledOrderExperiences>
            <Form.Label>
                <span>Ordenar por:</span>
                <Form.Select>
                    <option defaultValue>-- Seleccionar --</option>
                    <option value='mayor'>De mayor a menor</option>
                    <option value='menor'>De menor a mayor</option>
                </Form.Select>
            </Form.Label>
            <span>Mostrando X a XX de XX en total</span>
        </StyledOrderExperiences>
    )
}

export default OrderExperiences;