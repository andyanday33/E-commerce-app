import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import useSWR, { Fetcher } from 'swr';

type productType = {
    id: number,
    name: string,
    brand: string,
    description: string,
    price: number,
    imageUrl: string,
    quantityInStock: number,
    type: string,
  }


const fetcher: Fetcher<productType[], string> = (...args) => fetch(...args).then((res) => res.json())


const Home: NextPage = () => {
  const { data: products, error } = useSWR('http://localhost:5285/Products', fetcher)

  return (
    <div>
      <Head>
        <title>E Commerce Application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Store</h1>
        {error && <p>Failed to fetch data.</p>}
        {!error && !products && <p>Loading...</p>}
        {!!products&& (
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <p>{product.name}</p>
              </li>
              ),
            )}
          </ul>)
        }
      </main>
    </div>
  )
}

export default Home;
