import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import Product from '../components/Product'
import useKiosk from '../hooks/useKiosk'

export default function Home() {

  const { actualCategory } = useKiosk()

  return (
    <Layout page={`Menú ${actualCategory?.name}`}>
      <h1 className='text-4xl font-black'>{actualCategory?.name}</h1>
      <p className='text-2xl my-10'>
        Choose and customize your order below
      </p>
      
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {actualCategory?.products?.map(product =>(
          <Product key={product.id} product={product} />
        ))}
      </div>


    </Layout>
  )
}
