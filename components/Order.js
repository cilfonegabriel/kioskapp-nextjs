import Image from "next/image"
import axios from "axios"
import {toast} from "react-toastify"
import {formatMoney} from "../helpers"

export default function Order({order}) {

    const { id, name, total, pedido } = order

    const completeOrder = async () => {
        try {
            await axios.post(`/api/orders/${id}`)
            toast.success('Order Placed')
        } catch (error) {
            toast.error('There was a mistake')
        }
    }

    return (
        <div className="border p-10 space-y-5">
            <h3 className="text-2xl font-bold">Order: {id}</h3>
            <p className="text-lg font-bold">Customer: {name}</p>

            <div>
                {pedido.map(foot => (
                    <div key={foot.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                        <div className="w-32">
                            <Image
                                width={400}
                                height={500}
                                src={`/assets/img/${foot.image}.jpg`}
                                alt={`Image Foot ${foot.name}`}
                            />
                        </div>

                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">{foot.name}</h4>
                            <p className="text-lg font-bold">Amount: {foot.amount}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-bold text-4xl text-amber-500">
                    Total to Pay: {formatMoney(total)}
                </p>

                <button
                    className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded"
                    type="button"
                    onClick={completeOrder}
                >
                    Complete order
                </button>
            </div>
        </div>
    )
}
