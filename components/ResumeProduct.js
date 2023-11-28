import Image from "next/image"
import {formatMoney} from '../helpers'

const ResumeProduct = ({product}) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image 
          width={300}
          height={400}
          alt={`Image product ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>

      <div className="md:w-4/6">
        <p className="text-3xl font-bold">{product.name}</p>
        <p className="text-xl font-bold mt-2">Amount: {product.amount}</p>
        <p className="text-xl font-bold text-amber-500 mt-2">Price: {formatMoney( product.price)}</p>
        <p className="text-sm text-gray-700 mt-2">Subtotal: {formatMoney( product.price * product.amount)}</p>
      </div>

      <div>
        <button
          type="button"
          className="bg-sky-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
          </svg>

          Edit
        </button>

      </div>
    </div>
  )
}

export default ResumeProduct
