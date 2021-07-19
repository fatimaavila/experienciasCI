import styled from "styled-components";

const BlackTransparentBox = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 456;
    background-color: rgba(0, 0, 0, 0.3);

    .searchHome & {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
        border-radius: 5px;
    }

    .landingCategoryBlock & {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default BlackTransparentBox;