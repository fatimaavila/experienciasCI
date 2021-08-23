import { Form } from 'react-bootstrap';
import Button from '../button/Button';
import StyledOrderExperiences from './StyledOrderExperiences';

function OrderExperiences({onChangeSelect, order, filterNull}) {

    return (
        <StyledOrderExperiences>
            <Form.Label>
                <span>Ordenar por:</span>
                <Form.Select value={order} onChange={onChangeSelect}>
                    <option defaultValue={0} selected={!order && true}>-- Seleccionar --</option>
                    <option value='nombre-ASC'>Alfabético por Nombre - A-Z</option>
                    <option value='nombre-DESC'>Alfabético por Nombre - Z-A</option>
                    <option value='precio-DESC'>Mayor a menor - Precio</option>
                    <option value='precio-ASC'>Menor a mayor - Precio</option>
                </Form.Select>
            </Form.Label>
            <Button 
                blue
                onClickButton={filterNull}
            >
                Limpiar Filtros
            </Button>
        </StyledOrderExperiences>
    )
}

export default OrderExperiences;