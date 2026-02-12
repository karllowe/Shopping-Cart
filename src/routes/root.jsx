import {Outlet} from "react-router";
import {useState} from "react";
import classes from "./root.module.css";
import {Header} from "../components/Header/Header";


function Root() {
    const [shoppingCart, setShoppingCart] = useState([]);

    return (
        <div className={classes.body}>
            <Header shoppingCart={shoppingCart}/>
            <Outlet context={{shoppingCart, setShoppingCart}}/>
        </div>
    )
}

export {Root}