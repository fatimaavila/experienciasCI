import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // También puedes ejecutar codigo  cuando hay un error

    console.log('ERROR: ', error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ha habido un error en la App</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
