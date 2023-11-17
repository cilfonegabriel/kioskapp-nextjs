import { useState, useEffect, createContext } from "react";

const KioskContext = createContext()

const KioskProvider = ({children}) => {
    

    return (
        <kioskContext.Provider
            value={{

            }}
        >
            {children}
        </kioskContext.Provider>
    )
}

export{
    KioskProvider
}

export default KioskContext