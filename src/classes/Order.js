//@ts-check
import uid from "../utils/uid.js";

class Order {
    constructor(userId, items, total) {
        this.userId = userId;
        this.items = items;
        this.total = total;
        this.id = uid();
    }
}

const order = new Order("123123", [], 0);

export default Order;
