import { Outlet } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

import scss from './Home.module.scss';

const Home = () => {
    return (
        <section className={scss.section}>
            <Sidebar />

            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
        </section>
    );
};

export default Home;
