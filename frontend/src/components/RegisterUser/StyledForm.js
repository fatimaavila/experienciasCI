import styled from 'styled-components';
import closeIcon from '../../assets/closeIcon.svg';

const StyledForm = styled.div`
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

    & .formElement label {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    & .checkboxForm {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .date-picker {
        border-radius: 0.25rem;
        border: 1px solid var(--border-input);
        background-color: var(--color-white);
        width: 100%;
        padding: 0.375rem 0.75rem;
      }

    .errorForm {
        background-color: var(--color-red);
        color: var(--color-white);
        padding: 0.5rem 1rem;
        align-self: center;
        border-radius: 0.3rem;
        margin-bottom: 2rem;
    }

    .forgetPass {
        align-self: center;
        color: var(--color-white);
        margin-bottom: 2rem; 
    }
`;

export default StyledForm;