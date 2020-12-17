import React from 'react'
import styles from './MainInput.module.scss'

const MainInput = ({ value, setValue, title }) => {
  const handleChange = (newValue) => {
    if (newValue >= 0 || newValue === null) {
      setValue(parseInt(newValue))
    }
  }

  return (
    <div className={styles.container} >
      <div className={styles.title} > 
        {title}
      </div>
      <input
        className={styles.input}
        type="number"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default MainInput
