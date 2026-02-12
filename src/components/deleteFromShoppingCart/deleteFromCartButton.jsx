import classes from "./deleteFromCartButton.module.css";
import removeIcon from "../../assets/remove-from-cart.png";
import { useOutletContext } from "react-router";

function DeleteFromCartButton ({item, items, setItems}) {
    const {shoppingCart, setShoppingCart} = useOutletContext();

    const handleClick = () => {
        const updatedItem = {...item, inCart: false};
        const newItems = items.map((i) => i.id === item.id ? updatedItem : i);
        const newShoppingCart = shoppingCart.filter((i) => i.id !== item.id);
        setItems(newItems);
        setShoppingCart(newShoppingCart)
    };

    if (!item.inCart) {
        return 
    }
    return (
        <button 
            className={classes.button}
            aria-label="Remove from cart"
            onClick={handleClick}
        >
            <img src={removeIcon} alt={"Remove from cart"} className={classes.buttonImage}/>
        </button>
    )
}

export {DeleteFromCartButton}