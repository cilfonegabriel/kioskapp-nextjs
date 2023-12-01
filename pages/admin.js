import useSWR from "swr"
import axios from "axios"
import AdminLayout from "../layout/AdminLayout"

export default function Admin() {

    const fetcher = () => axios('/api/orders').then(datos => datos.data)
    const {data, error, isLoading} = useSWR('/api/orders', fetcher)
    console.log(data)
    console.log(error)
    console.log(isLoading)


    return(
        <AdminLayout page={'Admin'}>
            <h1 className="text-4xl font-black">Administration panel</h1>
            <p className="text-2xl my-10">Manage your Order</p>
        </AdminLayout>
    )
}
