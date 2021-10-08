import React from 'react';
import PropTypes from 'prop-types';

import { button } from './button.module.scss';

const Button = ({ children }) => {
    return <button className={button}>{children}</button>;
};

Button.propTypes = {
    children: PropTypes.node,
};

export default Button;
