import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const Home = () => {
  const router=useRouter();
  useEffect(()=>{
  router.push('/auth/register')
  },[])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Auth System</title>
        <link rel="icon" href="/img/Subtract.png" />
      </Head>

    </div>
  )
}

export default Home
