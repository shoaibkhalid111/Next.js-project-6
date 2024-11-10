import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <header className= "links-parent">
        <ul className='links'>
            <li className='link'><Link href={"/"}>Home</Link></li>
            <li className='link'><Link href={"/projects"}>Projects</Link></li>
            <li className='link'><Link href={"/about"}>About</Link></li>
            <li className='link'><Link href={"/contact"}>Contact</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Header
