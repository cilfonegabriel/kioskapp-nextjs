import { useState, useEffect, createContext } from "react";
import axios from "axios";

const KioskContext = createContext()

const KioskProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    const [actualCategory, setActualCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [oder, setOrder] = useState([])

    const getCategories = async () => {
        const {data} = await axios('/api/categories')
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        setActualCategory(categories[0])
    }, [categories])

    const handleClickCategory = id => {
        const category =  categories.filter( cat => cat.id === id )
        setActualCategory(category[0])
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAddOrder = ({categoryId, image,...product}) => {
        setOrder([...oder, product])
    }

    return (
        <KioskContext.Provider
            value={{
                categories,
                actualCategory,
                handleClickCategory,
                product,
                handleSetProduct,
                modal,
                handleChangeModal,
                handleAddOrder
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