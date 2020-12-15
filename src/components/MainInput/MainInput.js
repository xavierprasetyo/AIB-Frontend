import React from 'react'
import styles from './MainInput.module.scss'

const MainInput = ({ value, setValue, title }) => {
  return (
    <div className={styles.container} >
      <div className={styles.title} > 
        {title}
      </div>
      <input
        className={styles.input}
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  )
}

export default MainInput
