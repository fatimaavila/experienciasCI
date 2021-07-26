import styled from 'styled-components';

const StyledLoggedUserNav = styled.div`
  color: white;

  display: flex;
  flex-direction: column;

  .loggedUserNav {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .avatarLoggedUserNav {
    border-radius: 50% 50%;
    width: 15%;
  }
  .dropNav {
    display: flex;
    flex-direction: column;
  }
  .ulNavMenu {
    background-color: var(--color-cyan);
    position: absolute;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledLoggedUserNav;
