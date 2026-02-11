import classes from "./TextButton.module.css";

function TextButton({text, type}) {
    return (
        <button className={classes[type]} aria-label={text}>
            {text}
        </button>
    )
}

export {TextButton}