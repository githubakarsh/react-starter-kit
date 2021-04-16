import { AppContext } from './AppContext';


export const AppContextProvider = ({children, value}) => {
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

