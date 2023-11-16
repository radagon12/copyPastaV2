import {createContext, useState} from "react";

export const PrivateContext = createContext(null);

export function PrivateContextProvider({children}) {
  const [token,setToken] = useState(localStorage.getItem('anogh') !== null);

  return (
    <PrivateContext.Provider value={{token,setToken}}>
      {children}
    </PrivateContext.Provider>
  );
}