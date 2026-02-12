import {useOutletContext} from "react-router-dom";
import classes from "./cart.module.css";
import { DeleteFromCartButton } from "../components/deleteFromShoppingCart/deleteFromCartButton";
import {Checkout} from "../components/checkout/Checkout";
import { UpdateQuantity } from "../components/updateQuantity/UpdateQuantity";

function Cart () {
    const {shoppingCart} = useOutletContext();
    const {items, setItems} = useOutletContext();

    return (
        <main className={classes.main}>
            <div className={classes.detailColumn}>
                <h2>Shopping cart</h2>
                <section className={classes.cartList}>
                    {
                        shoppingCart.map((item) => (
                            <div key={item.id} className={classes.cartItem}>
                                <img src={item.image} alt={item.title} />
                                <div className={classes.rightDiv}>
                                    <div className={classes.titleAndPrice}>
                                        <h3>{item.title}</h3>
                                        <h4>£{item.price.toFixed(2)}</h4>
                                    </div>
                                    <p>{item.description}</p>
                                    <div className={classes.bottomRow}>
                                        <UpdateQuantity item={item}/>
                                        <DeleteFromCartButton item={item} items={items} setItems={setItems}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </div>
            <Checkout />
        </main>
    )
}

export {Cart}