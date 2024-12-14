

import { createContext } from 'react';


const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    //some logic here






    return (
        <DataContext.Provider value={{
            //som variable and other here
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;