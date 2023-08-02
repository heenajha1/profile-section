"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"


const Navbar = () => {
  return (
    <div className={styles.container}>
    <Link className={styles.logo} href="/">CodeGram</Link>
    
    <div className={styles.links}>
        <Link className={styles.link} href="/about">Profile</Link>
        <Link className={styles.link} href="">Courses</Link>
        <Link className={styles.link} href="">Socials</Link>
        <Link className={styles.link} href="">Testimonials</Link>
        <Link className={styles.link} href="/contact">Contact</Link>
        <button className={styles.button} onClick={()=> {console.log("logged out")}}>
        Logout</button>
    </div>

    </div>
  )
}

export default Navbar