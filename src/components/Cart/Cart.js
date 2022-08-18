import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartItems = (
        <ul>
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
                (item) => (
                    <li>{item.name}</li>
                )
            )}
        </ul>
    );

    return (
        <CartContext.Consumer>
            {({ totalAmount, addItem }) => (
                <Modal>
                    {cartItems}
                    <div className={classes.total}>
                        <span>Total Amount</span>
                        <span>35.62</span>
                    </div>
                    <div className={classes.actions}>
                        <button
                            className={classes['button-alt']}
                            onClick={props.hideCartHandler}
                        >
                            Close
                        </button>
                        <button className={classes.button} onClick={addItem}>
                            Order
                        </button>
                    </div>
                </Modal>
            )}
        </CartContext.Consumer>
    );
};

export default Cart;
