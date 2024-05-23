import { need_help_1x, need_help_2x } from 'assets/images/need-help';
import scss from './NeedHelp.module.scss';
import { icons } from 'assets/icons';

const NeedHelp = () => {
    return (
        <section className={scss.section}>
            <img
                src={need_help_1x}
                alt="Need help?"
                srcSet={`${need_help_1x} 1x, ${need_help_2x} 2x`}
            />

            <p className={scss.text}>
                If you need help with{' '}
                <span className={scss.textColor}>TaskPro</span>, check out our
                support resources or reach out to our customer support team.
            </p>

            <button className={scss.button}>
                <svg className={scss.icon}>
                    <use href={`${icons}#icon-question`}></use>
                </svg>
                Need help?
            </button>
        </section>
    );
};

export default NeedHelp;
