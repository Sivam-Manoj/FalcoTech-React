import { createContext, useState } from "react";

 const InterContext = createContext();

// eslint-disable-next-line react/prop-types
export const InteractiveContextProvider = ({ children }) => {

    const[nav,SetNav]=useState(false);
    return (
        <InterContext.Provider value={{nav,SetNav}}>
            {children}
        </InterContext.Provider>
    )
};

export default InterContext;