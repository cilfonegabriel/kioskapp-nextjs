import Layout from "../layout/Layout"

export default function Total () {
    return (
        <Layout page="Total and confirm your order">
            <h1 className="text-4xl font-black">Total and confirm your order</h1>
            <p className="text-2xl my-10">Confirm your order below</p>
            <form>
                <div>
                    <label htmlFor="name" className="block uppercase text-slate-800 font-bold text-xl">Name</label>

                    <input
                        id="name"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                    />
                </div>
            </form>
        </Layout>
    )
}