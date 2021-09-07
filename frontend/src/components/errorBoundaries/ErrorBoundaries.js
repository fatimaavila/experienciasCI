import React from 'react';
import StyledValidateRegister from '../validateRegister/StyledValidateRegister';
import LOGOICON from '../../assets/LOGOICONfondo.png';
import Button from '../button/Button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('ERROR: ', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledValidateRegister>
          <figure>
            <img src={LOGOICON} alt="Logo" className="icon" />
          </figure>
          <div className="emailVerify"></div>
          <h2>Ha ocurrido un error...</h2>
          <a href="/">
            <Button blue>Volver a la página principal</Button>
          </a>
        </StyledValidateRegister>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
