import { useEffect, useState } from "react";
import classes from "./browse.module.css";
import { ShoppingCard } from "../components/shoppingCard/ShoppingCard";
import { shoppingCartHelper } from "./helpers/shoppingCart";

function Browse() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    (async () => {
      try {
        const data = await shoppingCartHelper.fetchItems();
        setItems(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <main className={classes.main}>
      <div className={classes.browseToolBar}>
          <h2>Let's shop!</h2>
      </div>
      <div className={classes.gridDiv}>
          <section className={classes.grid}>
            {items.map((item) => (
                <ShoppingCard item={item} key={item.id}/>
                )
            )}
          </section>
      </div>
    </main>
  );
}

export { Browse };
