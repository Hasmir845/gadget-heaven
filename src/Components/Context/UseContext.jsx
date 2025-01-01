import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const addToCart = (item) => {
        setCart((prev) => [...prev, item]);
    };

    const addToWishlist = (item) => {
        setWishlist((prev) => [...prev, item]);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.product_id !== itemId));
    };
    const removeFromWishlist = (itemId) => {
        setWishlist((prevCart) => prevCart.filter((item) => item.product_id !== itemId));
    };

    return (
        <AppContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, removeFromCart, removeFromWishlist }}>
            {children}
        </AppContext.Provider>
    );
};
