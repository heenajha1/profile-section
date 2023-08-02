import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'


const Contact = () => {
  return (
    <div class={styles.container}>
    <div class={styles.sidebar}>
      <div class={styles.menu}>
      <div className={styles.links}>
        <Link className={styles.link} href="/about">Profile</Link>
        <Link className={styles.link} href="/projects">Socials</Link>
        <Link className={styles.link} href="/socials">Portfolio</Link>
        <Link className={styles.link} href="/dashboard">Resume</Link>
        {/* <Link className={styles.link} href="/contact">Contact</Link> */}
      </div>
      
      </div>
    </div>
  {/* Child Sections */}
    <div class={styles.dashboard}>
    <div class={styles.row}>
      <div>
      <div class={styles.col}>Profile Picture</div>
      <button class={styles.col}>Upload Picture</button>
      <button class={styles.col}>Delete</button>
      </div>
    </div>
    <div class={styles.row}>
      form 1
    </div>
    <div class={styles.row}>
      Toggles
    </div>
    <div class={styles.row}>
      submit edit space
    </div>
      
    </div>
  </div>
  )
}

export default Contact