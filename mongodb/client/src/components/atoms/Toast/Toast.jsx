import React from 'react';
import styles from './Toast.module.css';

export default function Toast({ text, status }) {
    let className = styles.succes;
    if(status === 'success') {
        className = styles.success;
    } else if(status === 'error') {
        className = styles.error;
    }
    return (
        <div className={`${styles.toast} ${className}`}>{text}</div>
    )
}
