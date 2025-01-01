import React, { useContext } from 'react';
import { AppContext } from '../Context/UseContext';

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(AppContext);
    return (
        <div className='my-5'>
            <div className='flex justify-between items-center mb-5'>
                <h4 className='text-2xl font-bold'>Wishlist</h4>
            </div>
            <div>
                {wishlist.map((item, index) => (
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
                                onClick={() => removeFromWishlist(item.product_id)}
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

export default Wishlist;