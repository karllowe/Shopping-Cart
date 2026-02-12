import classes from "./updateQuantity.module.css"

function UpdateQuantity({current}) {
    return (
        <div className={classes.div}>
            <button>-</button>
            <p>{current}</p>
            <button>+</button>
        </div>
    )
}

export {UpdateQuantity}