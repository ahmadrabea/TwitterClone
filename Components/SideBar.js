import React from 'react'
import Image from 'next/image'
import SideBarLink from '../Components/SideBarLink'
import { HomeIcon } from '@heroicons/react/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'

const SideBar = () => {
  const { data: session } = useSession()
  return (
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24">
        {/*twitter logo */}
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />{' '}
      </div>
      <div className="mt-4 mb-2.5 space-y-2.5 xl:ml-24">
        <SideBarLink text="Home" Icon={HomeIcon} active />
        <SideBarLink text="Explore" Icon={HashtagIcon} />
        <SideBarLink text="Notifications" Icon={BellIcon} />
        <SideBarLink text="Messages" Icon={InboxIcon} />
        <SideBarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SideBarLink text="Lists" Icon={ClipboardListIcon} />
        <SideBarLink text="Profile" Icon={UserIcon} />
        <SideBarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="ml-auto hidden h-[52px] w-56 rounded-full bg-[#1d9bf0] text-lg font-bold text-white shadow-md hover:bg-[#1a8cd8] xl:inline">
        Tweet
      </button>
      <div
        onClick={signOut}
        className="hoverAnimation mt-auto flex items-center justify-center text-[#d9d9d9] xl:ml-auto xl:-mr-5"
      >
        <img
          src={session.user.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">{session.user.tag}</p>
        </div>
        <DotsHorizontalIcon className="ml-10 hidden h-5 xl:inline" />
      </div>
    </div>
  )
}

export default SideBar
