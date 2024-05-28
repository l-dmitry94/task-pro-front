import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

import scss from './Home.module.scss';

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <section className={scss.section}>
            <Sidebar
                active={isSidebarOpen}
                setActive={() => setIsSidebarOpen(false)}
            />

            <div className={isSidebarOpen ? scss.active : scss.wrapper}>
                <Header
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                />
                <main>
                    <Outlet />
                </main>
            </div>
        </section>
    );
};

export default Home;
