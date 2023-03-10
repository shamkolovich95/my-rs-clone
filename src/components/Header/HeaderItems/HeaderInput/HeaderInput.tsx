import { FC } from 'react';
import styles from './HeaderInput.module.scss';

export const HeaderInput: FC = () => {
    return (
        <form className={styles['header-input']}>
            <input type="text" placeholder="Carbonara..." />
            <button />
        </form>
    );
};
