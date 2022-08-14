import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TableRow.module.css';

export default function TableRow({ item, onClick }) {
  return (
    <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.position}</td>
        <td>{item.address}</td>
        <td>{item.phone}</td>
        <td className={styles.half}><Link to={`/edit/${item._id}`}>Edit</Link></td>
        <td className={styles.half}><span onClick={() => onClick(item)}>Delete</span></td>
    </tr>
  )
}
