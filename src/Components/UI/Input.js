import React from 'react';

// get the styles
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label>
                Amount
            </label>
            <input value={props.val} type={props.type} onChange={props.onChange} />
        </div>
    );
}

export default Input;