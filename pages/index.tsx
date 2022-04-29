import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../Components/SideBar'
import Feed from '../Components/Feed'
import Login from '../Components/Login'
import { getProviders, getSession, useSession } from 'next-auth/react'
import React, { ReactChild, ReactNode } from 'react'
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

const Home: NextPage = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession()
  if (!session) return <Login providers={providers} />

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()
  const session = await getSession(context)
  return {
    props: {
      providers,
      session,
    },
  }
}
export default Home
