import classes from "./shoppingCard.module.css";
import { AddToCartButton } from "../addToCartButton/AddToCardButton";

function ShoppingCard({item}) {
    return(
        <div className={classes.body}>
            <img src={item.image} alt={item.title} className={classes.img}/>
            <div className={classes.details}>
                <p className={classes.title}>{item.title}</p>
                <div className={classes.bottomRow}>
                    <p>£{item.price}</p>
                    <AddToCartButton id={item.id}/>
                </div>
            </div>
        </div>
    )
}
export {ShoppingCard}