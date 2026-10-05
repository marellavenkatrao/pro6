import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductForm from "./ProductForm";

function ProductList() {
    const [products, setProducts] = useState([
        {
            name: "Laptop",
            price: 999,
            category: "Electronics"
        },
        {
            name: "Mouse",
            price: 29,
            category: "Accessories"
        }
    ]);

    const [cart, setCart] = useState(0);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const addToCart = () => {
        setCart(cart + 1);
    };

    return (
        <div>
            <h1>Product List</h1>

            <h3>Cart Items: {cart}</h3>

            <div className="products">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>

            <ProductForm addProduct={addProduct} />
        </div>
    );
}

export default ProductList;