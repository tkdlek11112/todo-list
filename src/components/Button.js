import React from 'react';
import classNames from 'classnames';
import './Button.scss'

function Button({children, size, color, outline, shadow, setScreen, screenId}){
    return (
        <button className={classNames('Button', size, color, {outline}, {shadow})} onClick={() => setScreen(screenId)} >{children}</button>
    );
}

export function NormalButton({children, size, color, outline, shadow, onClick}){
    return (
        <button className={classNames('Button', size, color, {outline}, {shadow})} onClick={onClick} >{children}</button>
    );
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
}

NormalButton.defaultProps = {
    size: 'medium',
    color: 'blue'
}


export default Button;