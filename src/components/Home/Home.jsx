import { Outlet } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

import scss from './Home.module.scss';
import { useState } from 'react';

const Home = () => {
    const [inProp, setInProp] = useState(false);

    const toggleSidebar = () => {
        setInProp(!inProp);
    };

    return (
        <section className={scss.section}>
            <Sidebar toggleSidebar={toggleSidebar} inProp={inProp} />

            <div className={scss.wrapper}>
                <Header toggleSidebar={toggleSidebar} />
                <main>
                    <Outlet />
                </main>
            </div>
        </section>
    );
};

export default Home;
