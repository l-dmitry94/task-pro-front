import scss from './ThemeSelect.module.scss';

const getClassNames = () => ({
    container: () => scss.selectContainer,
    control: () => scss.selectControl,
    placeholder: () => scss.selectPlaceholder,
    dropdownIndicator: () => scss.selectDropdownIndicator,
    menu: () => scss.selectMenu,
    menuList: () => scss.selectMenuList,
});

const getProps = (
    options,
    selectedOption,
    setSelectedOption,
    isSidebarOpen
) => ({
    classNamePrefix: 'react-select',
    classNames: getClassNames(),
    className: scss.select,
    options: options,
    defaultValue: selectedOption,
    onChange: setSelectedOption,
    placeholder: 'Theme',
    isSearchable: false,
    unstyled: true,
    isDisabled: isSidebarOpen ? true : false,
    styles: {
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected
                ? 'var(--light-green)'
                : 'rgba(255, 255, 255, 0.5)',
            cursor: 'pointer',
            transition: 'color .3s linear',

            '&:hover': {
                color: 'var(--light-green)',
            },
        }),
    },
});

export default getProps;
