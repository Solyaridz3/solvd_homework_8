import inputText from "../utils/inputText.js";
import User from "../classes/User.js";
import Cart from "../classes/Cart.js";
import writeToDb from "../utils/writeToDb.js";
import inputObject from "../utils/inputObject.js";
import data from "../../DataBase.json" assert { type: "json" };
import carts from "../../Carts.json" assert { type: "json" };
import Order from "../classes/Order.js";

/**
 * Here I tried to implement user actions with console
 */

const LOGIN_OPTIONS = `Choose option:
1 Login
2 Create account
Your pick: `;

async function login() {
    const option = await inputText(LOGIN_OPTIONS);
    let user;
    if (option === "1") {
        const userId = await inputText("Enter your userId: ");
        user = data.users.find((user) => user.userId === userId);
    } else if (option === "2") {
        user = await inputObject(User);
        if (user !== null) {
            data.users.push(user);
            const userCart = new Cart(user.userId);
            carts.userCarts.push(userCart);
            writeToDb("DataBase.json", data);
            writeToDb("Carts.json", carts);
        }
    }

    if (!user) {
        console.log("Wrong userId!");
        return login();
    }
    return user;
}

const ACTION_OPTIONS = `
What kind of action do you want to perform?
1 Browse books
2 Add book to cart
3 Check cart
4 Place order
Your pick: `;

function browseBooks() {
    for (const [index, book] of data.books.entries()) {
        console.log("Book №" + (index + 1));
        for (const field in book) {
            console.log(`${upperFirst(field)}: ` + book[field]);
        }
        console.log();
    }
}

async function addToCart(userId) {
    for (const [index, book] of data.books.entries()) {
        console.log(`Book № ${index + 1}: ${book.title}`);
    }
    const bookNumber =
        parseInt(await inputText("Which one do you want to add to you cart?")) -
        1;
    const userCart = carts.userCarts.find((cart) => cart.userId === userId);
    const cartIndex = carts.userCarts.indexOf(userCart);
    if (data.books[bookNumber]) {
        userCart.items.push(data.books[bookNumber]);
        carts.userCarts[cartIndex] = userCart;
        writeToDb("Carts.json", carts);
    } else {
        console.log("There is no such book with this number");
    }
}

function checkCart(userId) {
    const userCart = carts.userCarts.find((cart) => cart.userId === userId);

    console.log(`There is ${userCart.items.length} books in your cart`);
    for (const book of userCart.items) {
        console.log(`${book.title}`);
    }
}

function placeOrder(userId) {
    const items = carts.userCarts.find((cart) => cart.userId === userId).items;
    const userCart = new Cart(userId, items);
    const order = new Order(userId, userCart.items, userCart.calculateTotal());
    console.log("Your order is created, watch out for delivery date.");
    for (const [index, book] of order.items.entries()) {
        console.log(`Book № ${index + 1}: ${book.title}`);
    }
}

const upperFirst = (str) => str.charAt(0) + str.slice(1);

async function actionsHandler(user) {
    const action = await inputText(ACTION_OPTIONS);
    console.log();
    if (action === "1") {
        browseBooks();
    } else if (action === "2") {
        await addToCart(user.userId);
    } else if (action === "3") {
        checkCart(user.userId);
    } else if (action === "4") {
        placeOrder(user.userId);
    }
}

export { login, actionsHandler };
