//@ts-check
import uid from "../utils/uid.js";

class Order {
    /**
     * Constructor for creating an Order object.
     *
     * @param {Array} items - The items included in the order.
     * @param {number} total - The total cost of the order.
     */
    constructor(items, total) {
        this.orderId = uid();
        this.items = items;
        this.total = total;
    }
}

const order = new Order([], 0);

export default Order;
