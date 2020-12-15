import React from 'react'
import styles from './Dropdown.module.scss'

const Dropdown = ({ value, options, placeholder, setValue, title }) => {
  const handleChange = (newValue) => {
    if (newValue) {
      setValue(newValue)
    }
  }
  return (
    <div className={styles.container} >
      <div className={styles.title} > 
        {title}
      </div>
      <select
        className={styles.input}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value={null}>{placeholder}</option>
        {options.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
