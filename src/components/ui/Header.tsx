
import React from 'react'

const Header = ({ type="title",user,subtext,title}:HeaderProps) => {
  return (
   <div className='haeder-box'>
   <h1 className='header-box-title'>{title}
   {type === 'greeting' && user && <span className='text-bankGradient'>, {user}</span>}

   </h1>
   <p className='header-box-subtext'>{subtext}</p>
   </div>
  )
}

export default Header