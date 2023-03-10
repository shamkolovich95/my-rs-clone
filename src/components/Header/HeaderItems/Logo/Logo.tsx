import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

export const Logo: FC = () => {
    return (
        <Link to="/" className={styles['header-logo']}>
            <span className={styles['header-logo__logo']}></span>
            <span>IEAT</span>
        </Link>
    );
};
