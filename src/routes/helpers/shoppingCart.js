const shoppingCartHelper = (() => {
    async function fetchItems() {
        const apiReturn = await fetch("https://fakestoreapi.com/products");
        if (!apiReturn.ok) throw new Error("HTTP error " + apiReturn.status);
        const res = await apiReturn.json();
        return res
      }

    return {fetchItems}

})()

export {shoppingCartHelper}