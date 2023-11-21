import Image from "next/image"
import useKiosk from "../hooks/useKiosk"
import {formatMoney} from "../helpers" 

const ModalProduct = () => {

    const { product } = useKiosk()

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image 
              width={300}
              height={400}  
              alt={`imagen producto ${product.name}`}
              src={`/assets/img/${product.image}.jpg`}
            />
        </div>

        <div className="md:w-2/3">

            <div>
                
            </div>
            <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
            <p className="mt-5 font-black text-5xl text-amber-500">
                {formatMoney(product.price)}
            </p>

        </div>
    </div>
  )
}

export default ModalProduct
