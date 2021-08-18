import styled from "styled-components";

const BlackTransparentBox = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 456;
    background-color: var(--bg-black-light);

    .searchHome & {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        border-radius: 5px;
    }

    .landingCategoryBlock & {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default BlackTransparentBox;