//@ts-check
import BookSchema from "../schemas/BookSchema.js";

export class Book {
    static schema = BookSchema;
    /**
     * Constructor for creating a new Book instance.
     * @param userData
     * @property {string} title - The title of the book.
     * @property {string} author - The author of the book. Defaults to "unknown" if not provided.
     * @property {string} isbn - The ISBN of the book.
     * @property {number} price - The price of the book.
     * @property {boolean} availability - The availability status of the book.
     */
    constructor({ title, author, isbn, price, availability }) {
        this.title = title;
        this.author = author !== undefined ? author : "unknown";
        this.isbn = isbn;
        this.price = price;
        this.availability = availability;
    }
}

export class ScienceFiction extends Book {
    constructor(data) {
        super(data);
        this.category = "Science Fiction";
    }
}

export class Novel extends Book {
    constructor(data) {
        super(data);
        this.category = "Novel";
    }
}
