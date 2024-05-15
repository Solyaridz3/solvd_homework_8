//@ts-check
class Cart {
    /**
     * Constructor for creating a Cart object.
     *
     * @param {Array} items - The items to initialize the cart with.
     */
    constructor(items) {
        this.items = items;
    }

    /**
     * Adds a book to the cart.
     */
    addBook(book) {
        if (book !== null) {
            this.items.push(book);
        }
    }
    /**
     * Adds multiple books to the cart.
     */
    addBooks(books) {
        for (const book of books) {
            if (book !== null) {
                this.items.push(book);
            }
        }
    }

    /**
     * Removes an item from the cart based on its ISBN.
     */
    removeBook(isbnToRemove) {
        this.items = this.items.filter(({ isbn }) => isbn !== isbnToRemove);
    }

    /**
     * Clears all items from the cart.
     */
    clear() {
        this.items = [];
    }

    /**
     * Calculates the total price of all items in the cart.
     *
     * @return {number} The total price of all items in the cart.
     */
    calculateTotal() {
        return this.items.reduce(
            (total, item) => total + parseInt(item.price),
            0
        );
    }
}

export default Cart;
