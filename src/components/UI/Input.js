import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* spread operator ensures all k/v pairs in input object are added as props to input - makes input highly configurable from outside the component - eg will add id as id attribute */}
            <input {...props.input} />
        </div>
    );
};

export default Input;
