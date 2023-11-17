import { useState, useEffect, createContext } from "react";
import axios from "axios";

const KioskContext = createContext()

const KioskProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    const [actualCategory, setActualCategory] = useState({})

    const getCategories = async () => {
        const {data} = await axios('/api/categories')
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    const handleClickCategory = id => {
        const category =  categories.filter( cat => cat.id === id )
        setActualCategory(category[0])
    }

    return (
        <KioskContext.Provider
            value={{
                categories,
                actualCategory,
                handleClickCategory
            }}
        >
            {children}
        </KioskContext.Provider>
    )
}

export{
    KioskProvider
}

export default KioskContext