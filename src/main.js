//@ts-check
import { login, actionsHandler } from "./userActions/actions.js";

/***
 * Here I tried to implement bonus task with database
 * Users are able to login or create an account
 * After that they are able to browse books, add books to the cart,
 * check their cart, and place an order if they wish.
 */

async function main() {
    const user = await login();
    while (true) {
        await actionsHandler(user);
    }
}
main();
