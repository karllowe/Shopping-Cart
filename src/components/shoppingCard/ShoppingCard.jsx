import classes from "./shoppingCard.module.css";
import { AddToCartButton } from "../addToCartButton/AddToCardButton";
import { DeleteFromCartButton } from "../deleteFromShoppingCart/deleteFromCartButton";

function ShoppingCard({item, items, setItems}) {
    return(
        <div className={classes.body}>
            <img src={item.image} alt={item.title} className={classes.img}/>
            <div className={classes.details}>
                <p className={classes.title}>{item.title}</p>
                <div className={classes.bottomRow}>
                    <p>£{item.price}</p>
                    <AddToCartButton item={item} items={items} setItems={setItems}/>
                    <DeleteFromCartButton item ={item} items={items} setItems={setItems}/>
                </div>
            </div>
        </div>
    )
}
export {ShoppingCard}