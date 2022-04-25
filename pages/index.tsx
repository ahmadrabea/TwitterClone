import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../Components/SideBar'
import Feed from '../Components/Feed'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen max-w-[1500px] bg-black">
        <SideBar />

        <Feed />
        {/* Widget */}

        {/* Modal */}
      </main>
    </div>
  )
}

export default Home
