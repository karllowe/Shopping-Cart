import classes from "./addToCartButton.module.css";
import { useOutletContext } from "react-router";

function AddToCartButton({item, items, setItems}) {

    const {shoppingCart, setShoppingCart} = useOutletContext();

    const handleClick = () => {
        const updatedItem = {...item, inCart: true};
        const newItems = items.map((i) => i.id === item.id ? updatedItem : i)
        setItems(newItems);

        if (!Array.isArray(shoppingCart)) {
            setShoppingCart([updatedItem]);
            return
        }
        setShoppingCart([...shoppingCart, updatedItem]);
    };
    if (item.inCart) {
        return
    }
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