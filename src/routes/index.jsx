import classes from "./index.module.css";
import { TextButton } from "../components/textButton/TextButton";

function Index() {
    return (
        <main className={classes.main}>
            <div className={classes.heroDiv}>
                <h1>Karl's awesome shop!</h1>
                <h2>Buy cool stuff here</h2>
                <TextButton text={"Start shopping!"} type={"primary"} className={classes.CTA}/>
            </div>
        </main>
    )
}

export {Index}