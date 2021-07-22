import styled from 'styled-components';
import closeIcon from '../../assets/close.svg';

const StyledLoginUser = styled.div`
    background-color: var(--color-cyan);
    color: var(--color-white);

    & .btn-close {
        color: var(--color-white);
        background: url(${closeIcon});
    }

    & .modalBody {
        padding: 2rem;
    }

    & .formElement {
        margin-bottom: 2rem;
    }
`;

export default StyledLoginUser;