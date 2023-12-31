import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const KioskContext = createContext()

const KioskProvider = ({children}) => {

    const [categories, setCategories] = useState([])
    const [actualCategory, setActualCategory] = useState({})
    const [product, setProduct] = useState({})
    const [modal, setModal] = useState(false)
    const [order, setOrder] = useState([])
    const [name, setName] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()

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

    useEffect(() => {
        const newTotal = order.reduce((total, product) => (product.price * product.amount) + total, 0)
        setTotal(newTotal)
    }, [order])

    const handleClickCategory = id => {
        const category =  categories.filter( cat => cat.id === id )
        setActualCategory(category[0])
        router.push("/")
    }

    const handleSetProduct = product => {
        setProduct(product)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAddOrder = ({categoryId,...product}) => {
        if(order.some(productState => productState.id === product.id)) {
            //Update order.

            const updateOrder = order.map(productState => productState.id === product.id ? product : productState)
            setOrder(updateOrder)
            toast.success("Saved Successfully")
        } else {
            setOrder([...order, product])
            toast.success("Added to Order")
        }
        setModal(false)
    }

    const handleEditAmounts = id => {
        const updateProduct = order.filter(product => product.id === id)
        setProduct(updateProduct[0])

        setModal(!modal)
    }

    const handleDeleteProduct = id => {
        const updateOrder = order.filter(product => product.id !== id)
        setOrder(updateOrder)
    }

    const addOrder = async (e) => {
        e.preventDefault();

        try {
            const {data} = await axios.post('/api/orders', {order, name, total, date: Date.now().toString()})
            
            //Reset app
            setActualCategory(categories[0])
            setOrder([])
            setName('')
            setTotal(0)

            toast.success('Order placed correctly')

            setTimeout(() => {
                router.push('/')
            }, 3000);
            
        } catch (error) {
            console.log(error)
        }
    };

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
                handleAddOrder,
                order,
                handleEditAmounts,
                handleDeleteProduct,
                setName,
                name,
                addOrder,
                total
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