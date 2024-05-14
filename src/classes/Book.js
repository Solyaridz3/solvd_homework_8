//@ts-check
import BookSchema from "../schemas/BookSchema.js";

export class Book {
    static schema = BookSchema;
    #isbn; // in order to prevent changes
    constructor({ title, author, isbn, price, availability }) {
        this.title = title;
        this.author = author !== undefined ? author : "unknown";
        this.#isbn = isbn;
        this.price = price;
        this.availability = availability;
    }
    getIsbn() {
        return this.#isbn;
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
