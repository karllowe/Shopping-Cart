import classes from "./addToCartButton.module.css";
import { useOutletContext } from "react-router";

function AddToCartButton({id}) {
    const {shoppingCart, setShoppingCart} = useOutletContext();

    const handleClick = () => {
        if (!Array.isArray(shoppingCart)) {
            setShoppingCart([id]);
            return
        }
        setShoppingCart([...shoppingCart, id]);
        console.table(shoppingCart)
    };
    return (
        <button 
            className={classes.button}
            aria-label="Add to cart"
            onClick={handleClick}
        >
            Add
        </button>
    )
}

export {AddToCartButton}