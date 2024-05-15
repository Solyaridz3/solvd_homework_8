//@ts-check
import Order from "./Order.js";
import UserSchema from "../schemas/UserSchema.js";
import Cart from "./Cart.js";
import uid from "../utils/uid.js";
export class User {
    static schema = UserSchema;
    _userId; // we are still able to change that but we tell that we should not do that
    constructor({ name, email }) {
        this.name = name;
        this.email = email;
        this._userId = uid();
    }
    /**
     * Getter for retrieving the user ID.
     *
     * @return {string} The user ID of the user.
     */
    get userId() {
        return this._userId;
    }
}

export class Customer extends User {
    #orders; // we are able to create orders and get orders with getter, but we are unable to change them
    constructor(userData, orders = []) {
        super(userData);
        this.#orders = orders;
        this.cart = new Cart([]);
    }
    /**
     * Function to create new order
     */
    createOrder() {
        const newOrder = new Order(this.cart.items, this.cart.calculateTotal());
        this.#orders.push(newOrder);
        return newOrder;
    }
    /**
     * Getter for retrieving the orders of the customer.
     *
     * @return {Array} The orders of the customer.
     */
    get orders() {
        return this.#orders;
    }
}
