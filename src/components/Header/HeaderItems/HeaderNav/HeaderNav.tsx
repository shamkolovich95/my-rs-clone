import { FC } from 'react';

import { HeaderNavItem } from '../HeaderNavItem/HeaderNavItem';

import { PAGES } from '../../../../constants/constants';
import styles from './HeaderNav.module.scss';

export const HeaderNav: FC = () => {
    return (
        <nav className={styles['header-nav']}>
            <ul className={styles['header-nav-list']}>
                {PAGES.map((item, i) => {
                    return <HeaderNavItem text={item} key={i} />;
                })}
            </ul>
        </nav>
    );
};
