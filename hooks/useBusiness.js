import React, { useContext, useEffect, useState } from 'react'
import BusinessesContext from '../context/BusinessesContext'
import { getBusinesses } from '../helper/getBusiness'

export const useBusiness = () => {

    const { businesses, setBusinesses, isLoading, setIsLoading } = useContext(BusinessesContext)

    const loadBusinesses = async (setBusinesses) => {
        const response = await getBusinesses()
        const { businesses, error } = response
        if (error) return

        setBusinesses(businesses)
    }

    useEffect(() => {
        console.log(businesses)
        loadBusinesses(setBusinesses)
    }, [])

    return { businesses, setBusinesses, isLoading, setIsLoading }

}