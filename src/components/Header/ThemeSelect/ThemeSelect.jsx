import { useState } from 'react';
import Select from 'react-select';

import getProps from './selectProps';

const ThemeSelect = () => {
    const options = [
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
        { value: 'violet', label: 'Violet' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    return <Select {...getProps(options, selectedOption, setSelectedOption)} />;
};

export default ThemeSelect;
