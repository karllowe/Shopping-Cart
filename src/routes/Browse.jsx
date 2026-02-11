import { useEffect, useState } from "react";
import classes from "./browse.module.css";
import { ShoppingCard } from "../components/shoppingCard/ShoppingCard";

function Browse() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const apiReturn = await fetch("https://fakestoreapi.com/products");
        const res = await apiReturn.json();
        setItems(res);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  console.table(items);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <main className={classes.main}>
      <h2>Let's shop!</h2>
      <section className={classes.grid}>
        {items.map((item) => (
            <ShoppingCard item={item} key={item.id}/>
            )
        )}
      </section>
    </main>
  );
}

export { Browse };
