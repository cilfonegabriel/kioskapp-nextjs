import Head from 'next/head'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'

export default function Home({category}) {

  console.log(category)
  
  return (
    <h1>
      next js
    </h1>
  )
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const category = await prisma.category.findMany()

  return {
    props: {
      category,
    },
  };
}
