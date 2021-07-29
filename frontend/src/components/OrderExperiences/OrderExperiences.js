import { Form } from 'react-bootstrap';
import StyledOrderExperiences from './StyledOrderExperiences';

function OrderExperiences({onChangeSelect, order}) {

    return (
        <StyledOrderExperiences>
            <Form.Label>
                <span>Ordenar por:</span>
                <Form.Select value={order} onChange={onChangeSelect}>
                    <option defaultValue>-- Seleccionar --</option>
                    <option value='nombre-ASC'>Alfabético por Nombre - A-Z</option>
                    <option value='nombre-DESC'>Alfabético por Nombre - Z-A</option>
                    <option value='precio-DESC'>Mayor a menor - Precio</option>
                    <option value='precio-ASC'>Menor a mayor - Precio</option>
                </Form.Select>
            </Form.Label>
            <span>Mostrando X a XX de XX en total</span>
        </StyledOrderExperiences>
    )
}

export default OrderExperiences;