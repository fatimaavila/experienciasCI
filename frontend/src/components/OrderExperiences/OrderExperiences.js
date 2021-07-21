import StyledOrderExperiences from './StyledOrderExperiences';

function OrderExperiences() {
    return (
        <StyledOrderExperiences>
            <label>
                <span>Ordenar por:</span>
                <select>
                    <option defaultValue>-- Seleccionar --</option>
                    <option value='mayor'>De mayor a menor</option>
                    <option value='menor'>De menor a mayor</option>
                </select>
            </label>
            <span>Mostrando X a XX de XX en total</span>
        </StyledOrderExperiences>
    )
}

export default OrderExperiences;