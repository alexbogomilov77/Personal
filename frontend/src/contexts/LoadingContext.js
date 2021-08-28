import React, { createContext, useState } from 'react';

export const LoadingContext = createContext();

const LoadingContextProvider = props => {
  const [isLoading, setLoading] = useState(true)

  const stopLoading = () => {
    setTimeout(() => {
      setLoading(false)
    }, 700)
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, stopLoading }}>
      {props.children}
    </LoadingContext.Provider>
  );
}

export default LoadingContextProvider;
