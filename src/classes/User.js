//@ts-check
import UserSchema from "../schemas/UserSchema.js";
import Cart from "./Cart.js";
class User {
    _userId = "";
    static schema = UserSchema;
    /**
     * Constructor for creating a new User instance.
     */
    constructor({ name, email, userId }) {
        this.name = name;
        this.email = email;
        this._userId = userId;
        this.cart = new Cart([]);
        this.orders = [];
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

export default User;
