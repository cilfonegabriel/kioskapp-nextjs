export default function Order({order}) {

    const { id, name, total, pedido } = order

    return (
        <div className="border p-10 space-y-5">
            <h3 className="text-2xl font-bold">Order: {id}</h3>
            <p className="text-lg font-bold">Customer: {name}</p>

            <div>
                
            </div>
        </div>
    )
}
