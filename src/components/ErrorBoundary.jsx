import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-2xl font-poppins text-red-600">
            Something went wrong. Please refresh the page.
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;