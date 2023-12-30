import { createContext, useEffect, useState } from "react";
export const ContextCheckoutInformacion = createContext({});

export default function ContextCheckout({ children }) {
  const [informacion, setInformacion] = useState({});
  return (
    <ContextCheckoutInformacion.Provider
      value={{ informacion, setInformacion }}
    >
      {children}
    </ContextCheckoutInformacion.Provider>
  );
}
