import React from 'react';

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
        <>
          <h1>Ha habido un error en la App</h1>
          <img src="https://www.googleapis.com/" alt="error" />
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
