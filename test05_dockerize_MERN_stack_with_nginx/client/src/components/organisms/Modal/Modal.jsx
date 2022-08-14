import React from 'react';
import Button from '../../atoms/Button/Button';
import styles from './Modal.module.css';

export default function Modal({text, onClick}) {
  return (
    <div className={styles.container}>
        <div className={styles.modal}>
            <h4>{text}</h4>
            <div className={styles.wrapper}>
                <Button label="Cancel" onClick={() => onClick('cancel')} />
                <Button label="Delete" style={{backgroundColor: '#ff0000', marginLeft: '10px'}} onClick={() => onClick('action')} />
            </div>
        </div>
    </div>
  )
}
