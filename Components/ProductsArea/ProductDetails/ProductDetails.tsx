import { NavLink, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";

function ProductDetails(): JSX.Element {

    const params = useParams();
    const [product, setProduct] = useState<ProductModel>();

    useEffect(() => {
        const id = +params.id;
        productsService.getOneProduct(id)
            .then(product => setProduct(product))
            .catch(err => alert(err.message));

    }, [])
    
    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>
            <h3>Price: {product?.price}</h3>
            <h3>Stock: {product?.stock}</h3>
            <img src = {product?.imageUrl}/>
            <br/>
            <NavLink to = {"/home"}>Back</NavLink>
        </div>
    );
}

export default ProductDetails;
