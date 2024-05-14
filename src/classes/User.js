//@ts-check
import UserSchema from "../schemas/UserSchema.js";
import Cart from "./Cart.js";
class User {
    _userId = "";
    static schema = UserSchema;
    constructor({ name, email, userId }) {
        this.name = name;
        this.email = email;
        this._userId = userId;
        this.cart = new Cart([]);
        this.orders = [];
    }
    get userId() {
        return this._userId;
    }
}

export default User;
