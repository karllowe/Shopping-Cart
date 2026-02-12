import { useEffect, useState } from "react";
import {useOutletContext} from "react-router-dom";
import classes from "./browse.module.css";
import { ShoppingCard } from "../components/shoppingCard/ShoppingCard";
import { shoppingCartHelper } from "./helpers/shoppingCart";

function Browse() {
  const {items, setItems, itemsLoaded, setItemsLoaded} = useOutletContext();
  const [loading, setLoading] = useState(!itemsLoaded);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    if (itemsLoaded === true) {
      return
    };

    (async () => {
      try {
        const data = await shoppingCartHelper.fetchItems();
        setItems(data);
        setLoading(false);
        setItemsLoaded(true)
      } catch (error) {
        setError(error);
        setItemsLoaded(false)
      }
    })();
  }, [itemsLoaded,setItems, setItemsLoaded]);

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
                <ShoppingCard item={item} key={item.id} items={items} setItems={setItems}/>
                )
            )}
          </section>
      </div>
    </main>
  );
}

export { Browse };

// test