import { createContext, useContext, useState } from "react";

// Step 1: createContext()
const GlobalContext = createContext()

// Step 2: Create Conetxt Profvider
function GlobalContextProvider({ children }) {
    const [state, setState] = useState(0)
    const incrementState = () => setState(state+1)
    
    return (
        <GlobalContext.Provider value={{ state, incrementState }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Step 3: useContext()
const useGlobalContext = () => {
    return useContext(GlobalContext)
}

export default GlobalContextProvider
export { useGlobalContext }