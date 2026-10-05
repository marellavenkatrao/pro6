import React, { useState } from "react";

function ProductForm({ addProduct }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        addProduct({
            name: name,
            price: price,
            category: category
        });

        setName("");
        setPrice("");
        setCategory("");
    };

    return (
        <form onSubmit={submitForm}>
            <h2>Add Product</h2>

            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <button type="submit">
                Add Product
            </button>
        </form>
    );
}

export default ProductForm;