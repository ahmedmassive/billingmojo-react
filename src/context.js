import React, { createContext, useContext, useState, useEffect } from "react";

const MainContext = createContext();

export const useMainContext = () => useContext(MainContext);

export const MainContextProvider = ({ children, workspace, apikey }) => {
  const [state, setState] = useState({
    apikey: apikey,
    workspace: workspace,
    valid: false,
    loading: true,
  });

  return (
    <MainContext.Provider
      value={{
        ctx: state,
        func: {},
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
