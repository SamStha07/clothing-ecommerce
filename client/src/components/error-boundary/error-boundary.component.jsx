import React from 'react';
import { ErrorImageText } from './error-boundary.styles';
import { ErrorImageOverlay } from './error-boundary.styles';
import { ErrorImageContainer } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    // process the error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  // error images page
  // https://www.kapwing.com/404-illustrations?ref=producthunt
  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl=' https://i.imgur.com/yW2W9SC.png' />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
