import classes from "./header.module.css";
import FlowOptimaLogo from "../../assets/FlowOptimaLogo.png";
import { ShoppingButton} from "../shoppingButton/ShoppingButton";

function Header() {
    return (
        <div className={classes.headerDiv}>
            <img src={FlowOptimaLogo} alt="FlowOptima logo" />
            <ShoppingButton />
        </div>
    )
}

export {Header}