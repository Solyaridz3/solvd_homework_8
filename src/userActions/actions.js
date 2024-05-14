import inputText from "../utils/inputText.js";
import User from "../classes/User.js";
import writeToDb from "../utils/writeToDb.js";
import inputObject from "../utils/inputObject.js";
import data from "../../DataBase.json" assert { type: "json" };
import Order from "../classes/Order.js";
import upperFirst from "../utils/upperFirst.js";
/**
 * Here I tried to implement bonus task with database using console in order to run go to main.js file
 */

class App {
    static ACTION_OPTIONS = `
What kind of action do you want to perform?
1 Browse books
2 Add book to cart
3 Check cart
4 Place order
Your pick: `;
    static LOGIN_OPTIONS = `Choose option:
1 Login
2 Create account
Your pick: `;
    /**
     * Constructor for creating an instance of App.
     *
     * @param {User} user - The user object for the application.
     */
    constructor(user) {
        this.user = user;
        this.cart = this.user.cart;
    }
    
    /**
     * Handles the main functionality of the application.
     */
    static async main() {
        const user = await App.login();
        new App(user).loop();
    }

    /**
     * Handles the login functionality.
     *
     * @return {Promise<User>} The logged-in user.
     */
    static async login() {
        const option = await inputText(App.LOGIN_OPTIONS);
        let user;
        if (option === "1") {
            const userId = await inputText("Enter your userId: ");
            const userData = data.users.find((user) => user._userId === userId);
            if (userData) {
                const { name, email, cart } = userData;
                user = new User({ name, email, userId: userData._userId });
                // do not need to validate with schema because we already had this in database
                // means that we already checked it
                user.cart.addBooks(cart.items);
            }
        } else if (option === "2") {
            user = await inputObject(User);
            if (user !== null) {
                data.users.push(user);
                await writeToDb("DataBase.json", data);
            }
        }

        if (!user) {
            console.log("Wrong userId!");
            return await this.login();
        }
        return user;
    }

    /**
     * Asynchronously loops indefinitely calling actionsHandler.
     *
     */
    async loop() {
        while (true) {
            await this.actionsHandler();
        }
    }

    /**
     * Asynchronously handles different actions based on user input.
     */
    async actionsHandler() {
        const action = await inputText(App.ACTION_OPTIONS);
        console.log();
        if (action === "1") {
            this.browseBooks();
        } else if (action === "2") {
            await this.addToCart();
        } else if (action === "3") {
            this.checkCart();
        } else if (action === "4") {
            await this.placeOrder();
        }
    }

    /**
     * Function to browse through all the books in the data list and display their details.
     *
     */
    browseBooks() {
        for (const [index, book] of data.books.entries()) {
            console.log("Book №" + (index + 1));
            for (const field in book) {
                console.log(`${upperFirst(field)}: ` + book[field]);
            }
            console.log();
        }
    }

    /**
     * Asynchronously adds a book to the cart based on user input.
     * @return {Promise<void>} Promise that resolves once the book is added to the cart.
     */
    async addToCart() {
        for (const [index, book] of data.books.entries()) {
            console.log(`Book № ${index + 1}: ${book.title}`);
        }
        const bookNumber =
            parseInt(
                await inputText("Which one do you want to add to you cart?")
            ) - 1;
        if (data.books[bookNumber]) {
            this.cart.addBook(data.books[bookNumber]);
        } else {
            console.log("There is no such book with this number");
        }
    }

    /**
     * A function to check the items in the cart and log their titles.
     */
    checkCart() {
        const cart = this.user.cart;
        console.log(`There is ${cart.items.length} books in your cart`);
        for (const book of cart.items) {
            console.log(`${book.title}`);
        }
    }

    /**
     * Asynchronously places an order by creating an order object, updating user orders,
     * clearing the user's cart, updating user data in the database, and logs the order details.
     *
     * @return {Promise<void>} Promise that resolves once the order is placed.
     */
    async placeOrder() {
        const order = new Order(
            this.user.cart.items,
            this.user.cart.calculateTotal()
        );
        this.user.orders.push(order);
        this.user.cart.clear();
        const userDbIndex = data.users.findIndex(
            (dbUser) => dbUser._userId === this.user.userId
        );
        data.users[userDbIndex] = this.user;
        writeToDb("DataBase.json", data);
        console.log(
            "Your order is created and saved, watch out for delivery date."
        );
        for (const [index, book] of order.items.entries()) {
            console.log(`Book № ${index + 1}: ${book.title}`);
        }
    }
}

export default App;
