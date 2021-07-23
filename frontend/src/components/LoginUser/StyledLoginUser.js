import styled from 'styled-components';
import closeIcon from '../../assets/closeIcon.svg';

const StyledLoginUser = styled.div`
    background-color: var(--color-cyan);
    color: var(--color-white);

    & .btn-close {
        background: url(${closeIcon}) center/1em auto no-repeat;
    }

    & .modalBody {
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }

    .modalBody button {
        align-self: center;
    }

    & .formElement {
        margin-bottom: 2rem;
    }
`;

export default StyledLoginUser;