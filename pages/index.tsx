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
import Modal from '../Components/Modal'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Widgets from '../Components/Widgets'

const Home: NextPage = ({
  trendingResults,
  followResults,
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)
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
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {isOpen && <Modal />}
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  )
  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  )
  const providers = await getProviders()
  const session = await getSession(context)
  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  }
}
export default Home
