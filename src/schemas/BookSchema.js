//@ts-check

const BookSchema = {
    title: { required: true, type: "string" },
    author: { required: false, type: "string" },
    isbn: { required: true, type: "string" },
    price: { required: true, type: "number" },
    availability: { required: true, type: "boolean" },
};

export default BookSchema;
