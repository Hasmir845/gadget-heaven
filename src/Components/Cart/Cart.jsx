import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/UseContext';

const Cart = () => {
    const { cart, removeFromCart } = useContext(AppContext);
    const [isSorted, setIsSorted] = useState(false);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const sortedCart = isSorted
        ? [...cart].sort((a, b) => b.price - a.price) 
        : cart;

    const handleSortByPrice = () => {
        setIsSorted((prev) => !prev);
    };

    return (
        <div className='my-5'>
            <div className='flex justify-between items-center mb-5'>
                <h4 className='text-2xl font-bold'>Cart</h4>
                <div className='flex items-center space-x-4'>
                    <p className='text-xl font-semibold'>Total Cost: ${totalPrice.toFixed(2)}</p>
                    <button
                        onClick={handleSortByPrice}
                        className='border-2 border-purple-500 px-3 p-1 rounded-full btn'
                    >
                        {isSorted ? 'Unsort' : 'Sort By Price'}
                    </button>
                    <button className='bg-purple-500 px-3 p-1 rounded-full text-white btn'>
                        Purchase
                    </button>
                </div>
            </div>
            <div>
                {sortedCart.map((item, index) => (
                    <div
                        key={index}
                        className='p-4 mb-4 rounded-xl shadow-xl flex gap-2 items-center'
                    >
                        <div>
                            <img className='w-32' src={item.product_image} alt="" />
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-xl font-bold mb-1'>{item.product_title}</h3>
                            <p className='font-semibold text-gray-400 mb-2'>{item.description}</p>
                            <p className='font-semibold'>Price: ${item.price}</p>
                        </div>
                        <div className='ml-auto'>
                            <button
                                onClick={() => removeFromCart(item.product_id)}
                                className='text-red-500 font-bold text-lg hover:underline btn'
                            >
                                X
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
