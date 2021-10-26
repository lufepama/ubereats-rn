import React, { useState } from 'react'

const Context = React.createContext({})

export const BusinessesProvider = ({ children }) => {

    const [businesses, setBusinesses] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Context.Provider value={{ businesses, setBusinesses, isLoading, setIsLoading }} >
            {children}
        </Context.Provider>
    )
}

export default Context