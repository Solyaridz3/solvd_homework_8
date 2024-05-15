import { Novel, ScienceFiction } from "./classes/Book.js";
import writeToDb from "./utils/writeToDb.js";
import User from "./classes/User.js";
import createObject from "./utils/createObject.js";

const data = {
    books: [],
    users: [
        new User({
            name: "John",
            email: "JohnDoe@gmail.com",
            userId: "johndoe",
        }),
    ],
};

/** Examples of book creation  */

const book1 = createObject(Novel, {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    price: 12.99,
    availability: true,
});
const book2 = createObject(Novel, {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061120084",
    price: 9.99,
    availability: true,
});
const book3 = createObject(Novel, {
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    price: 8.99,
    availability: true,
});
const book4 = createObject(Novel, {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "9780141439518",
    price: 7.99,
    availability: true,
});
const book5 = createObject(Novel, {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    isbn: "9780590353427",
    price: 11.99,
    availability: true,
});

const books = [book1, book2, book3, book4, book5];
const validBooks = [];
for (book in books) {
    if (book !== null) {
        validBooks.push.book;
    }
}
data.book = validBooks;

writeToDb("DataBase.json", data).then(() => console.log("DONE!"));
