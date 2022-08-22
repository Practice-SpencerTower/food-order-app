import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;
    // translate items into single number - accounts for multiple counts of different meals
    const numCartItems = items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${
        btnHighlighted ? classes.bump : ''
    }`;
    // use timer to add / remove class that triggers animation
    useEffect(() => {
        if (items.length === 0) return;
        setBtnHighlighted(true);

        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);

        // clean-up function
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={classes.btnClasses} onClick={props.showCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
