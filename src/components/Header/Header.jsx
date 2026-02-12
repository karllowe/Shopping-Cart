import classes from "./header.module.css";
import FlowOptimaLogo from "../../assets/FlowOptimaLogo.png";
import cartOutline from "../../assets/cart-outline.png";
import { IconButton } from "../iconButton/iconButton";
import {NavLink} from "react-router-dom";

function Header({shoppingCart}) {
    const itemsInShoppingCart = shoppingCart.length;

    const links = [
        {
            name:"Home",
            key: "home",
            path: "/"
        }, 
        {
            name: "Browse",
            key: "browse",
            path: "/browse"
        }
    ];
    return (
        <div className={classes.headerDiv}>
            <img src={FlowOptimaLogo} alt="FlowOptima logo" />
            <div className={classes.rightSide}>
                <ul className={classes.headerNavButtons}>
                    {links.map((link) => (
                        <li key={link.key}>
                            <NavLink
                                to={`${link.path}`}
                                className={({isActive, isPending}) => [classes.link, isActive && classes.active, isPending && classes.pending]
                                .filter(Boolean)
                                .join(" ")
                                }
                                end={link.path==="/"}
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <IconButton name={"shopping cart"} type={"primary"} icon={cartOutline} link={"cart"}/>
                <p hidden={itemsInShoppingCart==0}>{itemsInShoppingCart} items</p>
            </div>
        </div>
    )
}

export {Header}