import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from '../About/About';
import { Calculator } from '../Calculator/Calculator';
import { Constructor } from '../Constructor/Constructor';
import { Main } from '../Main/Main';
import { Recipes } from '../Recipes/Recipes';

const AppRouter: FC = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/constructor" element={<Constructor />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    );
};

export default AppRouter;
