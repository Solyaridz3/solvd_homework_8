//@ts-check
import uid from "../utils/uid.js";

class Order {
    constructor(items, total) {
        this.orderId = uid();
        this.items = items;
        this.total = total;
    }
}

const order = new Order([], 0);

export default Order;
