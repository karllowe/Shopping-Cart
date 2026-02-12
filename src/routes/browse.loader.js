import {shoppingCartHelper} from "./helpers/shoppingCart";

export async function loader() {
    const items = await shoppingCartHelper.fetchItems();
    return {items}
}