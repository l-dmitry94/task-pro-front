import { Link } from 'react-router-dom';

import Container from 'components/Container';

import {
    welcome_mob_1x,
    welcome_mob_2x,
    welcome_tab_1x,
    welcome_tab_2x,
} from 'assets/images/welcome';

import scss from './Welcome.module.scss';
import { icons } from 'assets/icons';

const Welcome = () => {
    return (
        <section className={scss.section}>
            <Container>
                <div className={scss.logoImage}>
                    <picture>
                        <source
                            media="(min-width: 768px)"
                            srcSet={`${welcome_tab_1x} 1x, ${welcome_tab_2x} 2x`}
                        />
                        <img
                            className={scss.image}
                            src={welcome_mob_1x}
                            srcSet={`${welcome_mob_1x} 1x, ${welcome_mob_2x} 2x`}
                            alt="Task Pro"
                        />
                    </picture>
                    <div className={scss.logo}>
                        <div className={scss.logoWrapper}>
                            <svg className={scss.logoIcon}>
                                <use href={`${icons}#icon-logo`}></use>
                            </svg>
                        </div>
                        Task Pro
                    </div>
                </div>

                <p className={scss.text}>
                    Supercharge your productivity and take control of your tasks
                    with Task Pro - Don&apos;t wait, start achieving your goals
                    now!
                </p>

                <div className={scss.control}>
                    <Link className={scss.register} to="/auth/register">
                        Registration
                    </Link>
                    <Link className={scss.login} to="/auth/login">
                        Log In
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default Welcome;
