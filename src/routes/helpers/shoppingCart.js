class Product {
    constructor(id, title, price, description, category, image, inCart=false) {
        this.id = id,
        this.title = title,
        this.price = price,
        this.description = description,
        this.category = category,
        this.image = image,
        this.inCart = inCart;
    }
}

const shoppingCartHelper = (() => {
  async function fetchItems() {
    const apiReturn = await fetch("https://fakestoreapi.com/products");
    if (!apiReturn.ok) throw new Error("HTTP error " + apiReturn.status);
    const res = await apiReturn.json();

    const resAsClass = res.map((item) => (
        new Product(item.id, item.title, item.price, item.description, item.category, item.image, item.inCart)
    ))

    return resAsClass;
  }

  return { fetchItems };
})();

export { shoppingCartHelper, Product };
