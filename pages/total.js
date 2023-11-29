import Layout from "../layout/Layout"
import { useEffect } from "react";
import useKiosk from "../hooks/useKiosk";

export default function Total () {

    const {order} = useKiosk()

    const checkOrder = () => {
        return order.length === 0
    }

    const addOrder = e => {
        e.preventDefault();
        console.log("Get order")
    }

    return (
        <Layout page="Total and confirm your order">
            <h1 className="text-4xl font-black">Total and confirm your order</h1>
            <p className="text-2xl my-10">Confirm your order below</p>
            <form
                onSubmit={addOrder}
            >
                <div>
                    <label htmlFor="name" className="block uppercase text-slate-800 font-bold text-xl">Name</label>

                    <input
                        id="name"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                    />
                </div>

                <div className="mt-10">
                    <p className="text-2xl">Total to Pay: {''} <span className="font-bold">$</span></p>
                </div>
                <div className="mt-5">
                    <input
                        type="submit"
                        className="bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center"
                        value="Confirm Order" 
                    />
                </div>
            </form>
        </Layout>
    )
}