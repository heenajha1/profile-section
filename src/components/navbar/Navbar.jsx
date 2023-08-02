"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
    <Link href="/">Codemania</Link>
    <div>
    
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/socials">Socials</Link>
    <Link href="/dashboard">Resume</Link>
    <Link href="/contact">Contact</Link>
    <button onClick={()=> {console.log("logged out")}}>
        Logout</button>
    </div>

    </div>
  )
}

export default Navbar