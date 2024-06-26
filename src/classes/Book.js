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
    
    displayCategory(){
        console.log('This book does not have category');
    }
}

/** Book with science fiction category */
export class ScienceFiction extends Book {
    constructor(data) {
        super(data);
        this.category = "Science Fiction";
    }
    /**
     * A function to display the category of the book.
     *
     * @return {void} No return value
     */
    displayCategory(){
        console.log('This is science fiction book with with imaginative and futuristic concepts.');
    }
}

/** Book with novel category */
export class Novel extends Book {
    constructor(data) {
        super(data);
        this.category = "Novel";
    }

    /**
     * A function to display the category of the book.
     *
     * @return {void} No return value
     */
    displayCategory(){
        console.log('This is a novel, typically representing character and action with some degree of realism.')
    }
}
