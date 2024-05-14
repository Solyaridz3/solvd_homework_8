//@ts-check
import UserSchema from "../schemas/UserSchema.js";
class User {
    static schema = UserSchema;
    constructor({ name, email, userId }) {
        this.name = name;
        this.email = email;
        this.userId = userId;
    }
}

const user = new User({ name: "test", email: "test", userId: "test" });

export default User;
