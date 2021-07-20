import StyledOrderExperiences from './StyledOrderExperiences';

function OrderExperiences() {
    return (
        <StyledOrderExperiences>
            <label>
                <span>Ordenar por:</span>
                <select>
                    <option selected>-- Seleccionar --</option>
                    <option>De mayor a menor</option>
                    <option>De menor a mayor</option>
                </select>
            </label>
            <span>Mostrando X a XX de XX en total</span>
        </StyledOrderExperiences>
    )
}

export default OrderExperiences;