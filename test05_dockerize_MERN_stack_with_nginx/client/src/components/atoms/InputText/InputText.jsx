import React from 'react';
import styles from './InputText.module.css';

export default function InputText({ label, value, setValue, placeholder, type, required }) {
    return (
        <div className={styles.group}>
            {label && <label className={styles.label}>{label}</label>}
            <input 
                className={styles.input} 
                type={type ? type : 'text'}
                placeholder={placeholder ? placeholder : ''}
                value={value}
                onChange={(e) => setValue(e.target.value)} 
                required={required ? true : false}
            />
        </div>
    )
}
