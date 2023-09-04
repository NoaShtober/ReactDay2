import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import "./Routing.css";
import About from "../../AboutArea/About/About";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Page404 from "../Page404/Page404";
import ContactUs from "../../AboutArea/ContactUs/ContactUs";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import EmployeeList from "../../EmployeeArea/EmployeeList/EmployeeList";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path = "/home" element={<Home/>}/>
                <Route path = "/products" element={<ProductList/>}/>
                <Route path = "/about" element={<About/>}/>
                {/* <Route path = "/" element={<Home/>}/> */}
                <Route path= "/" element ={<Navigate to="/home"/>} />
                <Route path="*" element ={<Page404/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>
                <Route path="/product/details/:id" element={<ProductDetails/>}/>
                <Route path="/employees" element={<EmployeeList/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
