//@ts-check
class Cart {
    constructor(items) {
        this.items = items;
    }

    addBook(book) {
        this.items.push(book);
    }
    addBooks(books){
        this.items.push(...books);
    }

    removeItem(isbnToRemove) {
        this.items = this.items.filter(({ isbn }) => isbn !== isbnToRemove);
    }

    clear() {
        this.items = [];
    }

    calculateTotal() {
        return this.items.reduce(
            (total, item) => total + parseInt(item.price),
            0
        );
    }
}

export default Cart;
