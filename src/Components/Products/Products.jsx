import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        fetch('./products.json')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
                
                const uniqueCategories = ['All', ...new Set(data.map((product) => product.category))];
                setCategories(uniqueCategories);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-5">Explore Cutting-Edge Gadgets</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-5">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={`px-4 py-2 rounded-lg ${
                            selectedCategory === category
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-black hover:bg-gray-300'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                    <Product key={product.product_id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;
