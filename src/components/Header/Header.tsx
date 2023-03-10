import { FC } from 'react';
import { Logo } from './HeaderItems/Logo/Logo';
import styles from './Header.module.scss';
import { HeaderInput } from './HeaderItems/HeaderInput/HeaderInput';
import { HeaderNav } from './HeaderItems/HeaderNav/HeaderNav';
import { HeaderButton } from './HeaderItems/HeaderButton/HeaderButton';

export const Header: FC = () => {
    return (
        <header>
            <div className={`${styles['header-container']} container`}>
                <Logo />
                <HeaderInput />
                <HeaderNav />
                <HeaderButton />
            </div>
        </header>
    );
};
