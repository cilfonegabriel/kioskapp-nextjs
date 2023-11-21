import Image from "next/image"
import useKiosk from "../hooks/useKiosk"

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

        </div>
    </div>
  )
}

export default ModalProduct
