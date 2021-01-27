import React from 'react';
import classNames from 'classnames';
import './Button.scss'

function Button({children, size, color, outline, setScreen, screenId}){
    return (
        <button className={classNames('Button', size, color, {outline})} onClick={() => setScreen(screenId)} >{children}</button>
    );
}

export function NormalButton({children, size, color, outline, onClick}){
    return (
        <button className={classNames('Button', size, color, {outline})} onClick={onClick} >{children}</button>
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