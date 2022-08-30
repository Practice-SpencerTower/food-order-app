import { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmout = `${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    // functions to add and remove items from the cart
    const removeItemHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const addItemHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    removeItemHandler={removeItemHandler.bind(null, item.id)} // bind pre-configures fx for future execution
                    addItemHandler={addItemHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmout}</span>
            </div>
            {isCheckout && <Checkout />}
            <div className={classes.actions}>
                <button
                    className={classes['button-alt']}
                    onClick={props.hideCartHandler}
                >
                    Close
                </button>
                {hasItems && (
                    <button className={classes.button} onClick={orderHandler}>
                        Order
                    </button>
                )}
            </div>
        </Modal>
    );
};

export default Cart;
