import React from 'react'

const SideBarLink = ({ text, Icon, active }) => {
  return (
    <div
      className={`hoverAnimation flex items-center justify-center space-x-3 text-xl text-[#d9d9d9] xl:justify-start ${
        active && 'font-bold'
      }`}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  )
}

export default SideBarLink
