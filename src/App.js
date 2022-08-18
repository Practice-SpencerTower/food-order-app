import React from 'react';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    console.log('CARTISSHOWN', cartIsShown);

    return (
        <>
            {cartIsShown && <Cart />}
            <Header showCartHandler={showCartHandler} />
            <main>
                <Meals />
            </main>
        </>
    );
}

export default App;
