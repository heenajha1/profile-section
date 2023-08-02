import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'


const Middle = () => {
  return (
    <div class={styles.container}>
    <div class={styles.sidebar}>
      <div class={styles.menu}>
      <div className={styles.links}>
        <Link className={styles.link} href="/about">Profile</Link>
        <Link className={styles.link} href="/projects">Projects</Link>
        <Link className={styles.link} href="/socials">Socials</Link>
        <Link className={styles.link} href="/dashboard">Resume</Link>
        {/* <Link className={styles.link} href="/contact">Contact</Link> */}
    </div>
      
      </div>
    </div>
    <div class={styles.dashboard}>
      
    </div>
  </div>
  )
}

export default Middle