import React from 'react'
import styles from './Dropdown.module.scss'

const Dropdown = ({ value, options, placeholder, setValue, title }) => {
  const handleChange = (newValue) => {
    if (newValue) {
      setValue(parseInt(newValue))
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
        onChange={(e) => setValue(parseInt(e.target.value))}
      >
        <option value={null}>{placeholder}</option>
        {options.map((item,idx) => (
          <option key={idx} value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
