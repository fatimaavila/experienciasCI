import styled from "styled-components";

const StyledAboutUs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & h2 {
        font-size: 38px;
        margin-bottom: 3rem;
    }

    & > section {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 3rem;
    }

    & .aboutUs_Box {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
        border: 3px solid var(--color-cyan);
        border-radius: 6px;
        padding: 2rem;
    }

    .aboutUs_Box p {
        line-height: 20px;
        text-align: center;
        margin-top: 2rem;
        color: var(--color-grey-dark);
    }
`

export default StyledAboutUs;