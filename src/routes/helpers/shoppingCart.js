class Product {
    constructor(id, title, price, description, category, image, inCart=false, cartQty=0) {
        this.id = id,
        this.title = title,
        this.price = price,
        this.description = description,
        this.category = category,
        this.image = image,
        this.inCart = inCart;
        this.cartQty = cartQty
    }
}

const shoppingCartHelper = (() => {
  async function fetchItems() {
    const apiReturn = await fetch("https://fakestoreapi.com/products");
    if (!apiReturn.ok) throw new Error("HTTP error " + apiReturn.status);
    const res = await apiReturn.json();

    const resAsClass = res.map((item) => (
        new Product(item.id, item.title, item.price, item.description, item.category, item.image, item.inCart, item.cartQty)
    ))

    return resAsClass;
  }

  return { fetchItems };
})();

export { shoppingCartHelper, Product };
