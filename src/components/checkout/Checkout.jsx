import {useOutletContext} from "react-router-dom";
import classes from "./checkout.module.css";

function Checkout() {
    const {shoppingCart} = useOutletContext();

    const totalItems = shoppingCart.reduce((sum, item)=> sum + item.cartQty, 0);
    const subtotal = shoppingCart.reduce((sum, item) => sum + (item.cartQty * item.price), 0)

    return (
        <div className={classes.body}>
            <h3>Order summary</h3>
            <p>{totalItems} item{totalItems>1 || totalItems==0 ? "s" :""}</p>
            <div className={classes.subtotalDiv}>
                <h3>Subtotal </h3>
                <h3>£{subtotal.toFixed(2)}</h3>
            </div>
            <button>
                Go to checkout
            </button>
        </div>
    )
}

export {Checkout}