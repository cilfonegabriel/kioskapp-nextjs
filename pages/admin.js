import AdminLayout from "../layout/AdminLayout"

export default function Admin() {

    return(
        <AdminLayout page={'Admin'}>
            <h1 className="text-4xl font-black">Administration panel</h1>
            <p className="text-2xl my-10">Manage your Order</p>
        </AdminLayout>
    )
}
