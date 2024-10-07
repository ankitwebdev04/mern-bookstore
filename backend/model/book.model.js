import mongooose from "mongoose";

const bookSchema = mongooose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
})
const Book = mongooose.model("Book", bookSchema);

export default Book;