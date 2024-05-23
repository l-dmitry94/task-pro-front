import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import ScreensPage from 'pages/ScreensPage';

import scss from './Home.module.scss';

const Home = () => {
    return (
        <section className={scss.section}>
            <Sidebar />

            <div>
                <Header />
                <main>
                    <ScreensPage />
                </main>
            </div>
        </section>
    );
};

export default Home;
