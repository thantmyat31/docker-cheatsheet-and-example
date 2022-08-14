import React from 'react';
import styles from './Button.module.css';

export default function Button({ style, type, label, onClick }) {
  return (
    <button style={style} type={type} className={styles.button} onClick={onClick}>{label}</button>
  )
}
