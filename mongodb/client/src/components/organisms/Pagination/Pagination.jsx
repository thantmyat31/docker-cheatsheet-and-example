import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({dataLength, dataPerPage, pageNumber, setPageNumber}) => {
    const totalPage = Math.ceil(dataLength/dataPerPage);
    let pages = [];
    for(let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }
    return ( 
        <div className={styles.pagination}>
            {
                pageNumber > 1 ?
                <span 
                    className={styles.item}
                    onClick={() => {
                        if(pageNumber > 1) setPageNumber(pageNumber - 1);
                    }}
                >&#11164;</span> :
                null
            }

            {pages.map((page, index) => (
                <span 
                    key={index} 
                    className={`${styles.item} ${pageNumber === page ? styles.active : ''}`}
                    onClick={() => setPageNumber(page)}
                >{page}</span>
            ))}

            {
                pageNumber < totalPage ?
                <span
                    className={styles.item}
                    onClick={() => {
                        if(pageNumber < totalPage) setPageNumber(pageNumber + 1);
                    }}
                >&#11166;</span> :
                null
            }
        </div>
     );
}
 
export default Pagination;