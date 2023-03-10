import { FC } from 'react';
import { DevelopersBlock } from './DevelopersBlock/DevelopersBlock';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles['footer-container']} container`}>
                <p>© 2022</p>
                <DevelopersBlock />
                <a className={styles['footer-container__school']} href="https://rs.school/"></a>
            </div>
        </footer>
    );
};
