//@ts-check
class Cart {
    constructor(userId, items = []) {
        this.userId = userId;
        this.items = items;1
    }

    addBook(book) {
        this.items.push(book);
    }

    removeItem(isbnToRemove) {
        this.items = this.items.filter(({ isbn }) => isbn !== isbnToRemove);
    }

    calculateTotal() {
        return this.items.reduce(
            (total, item) => total + parseInt(item.price),
            0
        );
    }
}

export default Cart;
