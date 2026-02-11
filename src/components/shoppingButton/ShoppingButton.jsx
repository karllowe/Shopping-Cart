import cartOutline from "../../assets/cart-outline.png";
import classes from "./shoppingButton.module.css";

function ShoppingButton() {
    return (
        <button className={classes.button}>
            <img src={cartOutline} alt="shopping cart button" className={classes.cartIcon}/>
        </button>
    )
}

export {ShoppingButton}