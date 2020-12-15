import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import style from './CheckBox.module.css';
import classNames from 'classnames/bind'

const cx = classNames.bind(style);

export default function CheckBox({ children, checked, ...rest}) {
    return (
        <div className={cx('checkbox')}>
            <label>
                <input type='checkbox' checked = {checked} {...rest} />
                <div className={cx('icon')}>
                    {checked ? 
                   ( <MdCheckBox className={cx('checked')} />)
                    :
                    (<MdCheckBoxOutlineBlank />)}
                </div>
            </label>
            <span>{children}</span>
        </div>
        
    );
}
