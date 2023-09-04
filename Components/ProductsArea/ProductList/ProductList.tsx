import { useEffect, useState } from "react";
import "./ProductList.css";
import productsService from "../../../Services/ProductsService";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";

function ProductList(): JSX.Element {
 
    const[allProducts, setAllProducts] = useState<ProductModel[]>([]);
    useEffect(() => {
        productsService.getAllProducts()
            .then(products => {
                console.log(products)
                setAllProducts(products);
            })
            .catch(err => alert(err.message))

    }, [])
    return (
        <div className="ProductList">
             {allProducts.map(p => <ProductCard key = {p.id} product={p}/>)} 
			Products...
        </div>
    );
}

export default ProductList;
