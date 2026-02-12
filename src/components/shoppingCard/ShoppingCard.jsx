import classes from "./shoppingCard.module.css";
import { TextButton } from "../textButton/TextButton";

function ShoppingCard({item}) {
    return(
        <div className={classes.body}>
            <img src={item.image} alt={item.title} className={classes.img}/>
            <div className={classes.details}>
                <p className={classes.title}>{item.title}</p>
                <div className={classes.bottomRow}>
                    <p>£{item.price}</p>
                    <TextButton text={"Add"} type={"primary"}/>
                </div>
            </div>
        </div>
    )
}
export {ShoppingCard}