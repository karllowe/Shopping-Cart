import classes from "./shoppingCard.module.css"

function ShoppingCard({item}) {
    return(
        <div className={classes.body}>
            <img src={item.image} alt={item.title} className={classes.img}/>
            <h3>{item.title}</h3>
        </div>
    )
}
export {ShoppingCard}