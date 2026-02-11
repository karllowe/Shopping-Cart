import classes from "./TextButton.module.css";
import { useNavigate } from "react-router-dom";

function TextButton({text, type, link}) {

    const navigate = useNavigate();

    return (
        <button 
            className={classes[type]} 
            aria-label={text}
            onClick={() => link ? navigate(link): ""}
        >
            {text}
        </button>
    )
}

export {TextButton}