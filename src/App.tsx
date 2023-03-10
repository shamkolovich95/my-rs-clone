import { FC } from 'react';
import { Footer } from './components/Footer/Footer';

import { Header } from './components/Header/Header';
import AppRouter from './pages/Routes/AppRouter';

import './styles/global.scss';

export const App: FC = () => {
    return (
        <>
            <Header />
            <AppRouter />
            <Footer />
        </>
    );
};
