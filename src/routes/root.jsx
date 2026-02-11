import classes from "./root.module.css";
import {Header} from "../components/Header/Header";


function Root() {
    return (
        <div className={classes.body}>
            <Header />
            "root test"
        </div>
    )
}

export {Root}