import React from 'react'
import TableRow from '../../atoms/TableRow/TableRow';
import styles from './Table.module.css';


export default function Table({ filtered, ...rest }) {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered ? filtered.map(item => <TableRow key={item._id} item={item} {...rest} />) :
                        (<tr><td> - </td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
