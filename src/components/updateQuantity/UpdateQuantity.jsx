import classes from "./updateQuantity.module.css";
import { useOutletContext } from "react-router";

function UpdateQuantity({item, items, setItems}) {
    const {shoppingCart, setShoppingCart} = useOutletContext();
    
    function Increase() {
        const newQty = item.cartQty +1;
        const updatedItem = {...item, cartQty: newQty};
        const updatedCart = shoppingCart.map((i) => i.id === item.id ? updatedItem : i);
        setShoppingCart(updatedCart);
        const updatedItems = items.map((i) => {
            if (i.id !== item.id) {
                return i
            } else {
                return {...i, cartQty:newQty}
            }
        });
        setItems(updatedItems);
    }

    function Decrease() {
        const newQty = Math.max(item.cartQty - 1, 0);
        let updatedItem;
        let updatedCart;
        let updatedItems;
        if (newQty === 0) {
            updatedItem = {...item, cartQty: newQty, inCart: false};
            updatedCart = shoppingCart.filter((i) => i.id !== item.id);
            updatedItems = items.map((i) => {
                if (i.id !== item.id) {
                    return i
                } else {
                    return {...i, cartQty:newQty, inCart:false}
                }
            });
        } else {
            updatedItem = {...item, cartQty: newQty};
            updatedCart = shoppingCart.map((i) => i.id === item.id ? updatedItem : i);
            updatedItems = items.map((i) => {
                if (i.id !== item.id) {
                    return i
                } else {
                    return {...i, cartQty:newQty}
                }
            });
        };
        setItems(updatedItems);
        setShoppingCart(updatedCart)
    }

    if (!item.inCart) return;

    return (
        <div className={classes.div}>
            <button onClick={Decrease}>-</button>
            <p>{item.cartQty}</p>
            <button onClick={Increase}>+</button>
        </div>
    )
}

export {UpdateQuantity}