import classes from "./iconButton.module.css";
import { useNavigate } from "react-router-dom";

function IconButton({name, type, icon, link}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${link}`)
    };
    return (
        <button 
            className={classes[type]} 
            aria-label={name}
            onClick={handleClick}
        >
            <img src={icon} alt={`${name} button`} className={classes.buttonImage}/>
        </button>
    )
}

export {IconButton}