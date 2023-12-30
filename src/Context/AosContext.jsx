import { createContext, useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';




 const ContextAos = createContext();


// eslint-disable-next-line react/prop-types
export const AosContextProvider = ({ children }) => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
  return(
    <ContextAos.Provider
    value={{

    }}>
      {children}
    </ContextAos.Provider>
  )
}
export default ContextAos;