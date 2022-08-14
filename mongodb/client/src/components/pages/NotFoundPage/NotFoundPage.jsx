import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../organisms/Layout/Layout';
import styles from './NotFoundPage.module.css';


export default function NotFoundPage() {
  return (
    <Layout>
        <div className={styles.container}>
            <h3>The page you are looking for does not exists.</h3>
            <p>Go back to the <Link to="/">Home</Link> page.</p>
        </div>
    </Layout>
  )
}
