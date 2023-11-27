import Image from "next/image"

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

      <div className="md:w-5/6">
        <p className="text-3xl font-bold">{product.name}</p>
      </div>
    </div>
  )
}

export default ResumeProduct
