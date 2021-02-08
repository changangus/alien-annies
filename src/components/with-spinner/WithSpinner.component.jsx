import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

const withSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? 
    ( 
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    )
    : 
    (
      <WrappedComponent {...otherProps} />
    )
  };
  return Spinner
}
;

export default withSpinner;