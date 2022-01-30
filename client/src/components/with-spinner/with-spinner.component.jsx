import React from 'react';
import { SpinnerContainer } from './with-spinner.styles';
import { SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default WithSpinner;
