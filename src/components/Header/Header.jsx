import classes from "./header.module.css";
import FlowOptimaLogo from "../../assets/FlowOptimaLogo.png";
import cartOutline from "../../assets/cart-outline.png";
import { IconButton } from "../iconButton/iconButton";

function Header() {
    return (
        <div className={classes.headerDiv}>
            <img src={FlowOptimaLogo} alt="FlowOptima logo" />
            <div className={classes.rightSide}>
                <ul className={classes.headerNavButtons}>
                    <li>Home</li>
                    <li>Browse</li>
                </ul>
                <IconButton name={"shopping cart"} type={"primary"} icon={cartOutline} />
            </div>
        </div>
    )
}

export {Header}