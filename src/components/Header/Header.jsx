import Container from 'components/Container';
import ThemeSelect from './ThemeSelect';
import Profile from './Profile';

import { icons } from 'assets/icons';

import scss from './Header.module.scss';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <header className={scss.header}>
            <Container>
                <div className={scss.wrapper}>
                    <button className={scss.burger} onClick={toggleSidebar}>
                        <svg className={scss.burgerIcon}>
                            <use href={`${icons}#icon-burger`}></use>
                        </svg>
                    </button>

                    <div className={scss.main}>
                        <ThemeSelect isSidebarOpen={isSidebarOpen} />
                        <Profile />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
