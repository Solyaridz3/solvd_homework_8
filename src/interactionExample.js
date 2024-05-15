//@ts-check
import { Book, Novel, ScienceFiction } from "./classes/Book.js";
import { Customer } from "./classes/User.js";
import Order from "./classes/Order.js";

// Books creation
const book1 = new Novel({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    price: 12.99,
    availability: true,
});
const book2 = new Novel({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    price: 9.99,
    availability: true,
});
const book3 = new Novel({
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    price: 8.99,
    availability: true,
});
const book4 = new Novel({
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    price: 7.99,
    availability: true,
});
const book5 = new ScienceFiction({
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    isbn: "9780590353427",
    price: 11.99,
    availability: true,
});

const user = new Customer({
    name: "Serhiy",
    email: "solyaridz3@gmail.com",
    userId: "solyaridz3",
});

// we can get userId but we can not change userId directly

user.cart.addBooks([book1, book2, book3]);
user.cart.addBook(book4);
// we are able to removeBook from cart by ISBN
user.cart.removeBook("9780141439518");
// we are able to create orders
user.createOrder();

console.log(user);
console.log(user.orders);
