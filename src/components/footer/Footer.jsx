import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
    
    <div>2023 @Codemania. All rights reserved.</div>
    <div className={styles.socials}>
      <Image src="/1.png" className={styles.icon} width={20} height={20} alt="fb"></Image>
      <Image src="/2.png" className={styles.icon} width={20} height={20} alt="fb"></Image>
      <Image src="/3.png" className={styles.icon} width={20} height={20} alt="fb"></Image>
      <Image src="/4.png" className={styles.icon} width={20} height={20} alt="fb"></Image>

    </div>
    </div>
  )
}

export default Footer