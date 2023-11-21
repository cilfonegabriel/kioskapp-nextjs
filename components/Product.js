import Image from "next/image"

const Product = ({product}) => {

    const { name, image, price } = product

  return (
    <div className="border p-3">
      <Image src={`/assets/img/${image}.jpg`} alt={`Imagen Platillo ${name}`} width={400} height={500} />
    </div>
  )
}

export default Product
