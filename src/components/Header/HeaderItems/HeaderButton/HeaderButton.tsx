import { FC } from 'react';
import styles from './HeaderButton.module.scss';

export const HeaderButton: FC = () => {
    return <button className={styles['header__button']}>Sing In</button>;
};
