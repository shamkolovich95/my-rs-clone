import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderNavItem.module.scss';

interface IProps {
    text: string;
}

export const HeaderNavItem: FC<IProps> = ({ text }) => {
    const link = text.split(' ')[0].toLowerCase();

    return (
        <Link to={'/' + link} className={styles['header-nav-list__link']}>
            <li>{text}</li>
        </Link>
    );
};
