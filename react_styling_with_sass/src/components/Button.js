import React from 'react';
import './Button.scss';
import classnames from 'classnames'
export default function Button({children, size, color, outline, fullWidth, ...rest}) {
    // return <button className={`Button $(size)`}>{children}</button>
    return (
        <button className={classnames('Button',size,color,{outline,fullWidth})} {...rest}>
            {children}
        </button>);
}
Button.defaultProps ={
    size: 'medium',
    color : 'blue'
};
