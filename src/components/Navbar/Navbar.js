import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        AIB - Prediksi Default Card
      </div>
      <div className={styles.subTitle}>
        By: Shafa Amarsya - 18218007, Xavier Prasetyo - 18218040, Garin Ichsan - 18218050
      </div>
    </div>
  )
}

export default Navbar
