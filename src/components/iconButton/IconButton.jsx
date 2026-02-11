import classes from "./iconButton.module.css";

function IconButton({name, type, icon}) {
    return (
        <button className={classes[type]} aria-label={name}>
            <img src={icon} alt={`${name} button`} className={classes.buttonImage}/>
        </button>
    )
}

export {IconButton}