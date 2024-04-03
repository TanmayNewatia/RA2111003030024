import axios from 'axios';
import { useState, useEffect } from 'react';
export default function AllProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios({
            method: "get",
            url: `/categories/${"Laptop"}/products`,
            params: {
                companyName: "AMZ",
                n: 10,
                p: 1,
                q: 10000
            }
        }).then(function (response) {
            setProducts(response.data);
        });
    }, []);
    return (
        <div>
            <h1>All Products</h1>
            <ul>
                {products.map((product, id) => {
                    return (<div key={id} style={{ margin: "20px" }}>
                        <li>{product.productName}</li>
                        <li>{product.price}</li>
                        <li>{product.rating}</li>
                        <li>{product.discount}</li>
                        <li>{product.availability}</li>
                    </div>)
                })}
            </ul>
        </div>
    );
}