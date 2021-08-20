import styled from "styled-components";

const StyledEmailRecoverPass = styled.div`
    width: 1200px;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .verifyEmail_Pass {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;

        & form {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 100%;

            & input[type='email'] {
                border: 0px;
                border-radius: 0px;
                border-bottom: 2px solid var(--color-cyan);
            }

            & button {
                align-self: center;
            }

            & .errorForm {
                background-color: var(--color-red);
                color: var(--color-white);
                padding: 0.5rem 1rem;
                align-self: center;
                border-radius: 0.3rem;
            }
        }
    }
`;

export default StyledEmailRecoverPass;