import { RouterContext } from "https://deno.land/x/oak@v6.5.0/mod.ts";
import db from "./mongodb.ts";

const booksCollection = db.collection("books");

interface Book {
  book_name: string;
  book_id: number;
  price: number;
}

const addBook = async (ctx: RouterContext) => {
  const { book_name, book_id, price } = await ctx.request.body().value;
  const book: Book = {
    book_name,
    book_id,
    price,
  };
  const id = await booksCollection.insertOne(book);
  ctx.response.status = 201;
  ctx.response.body = book;
};

const getBookByName = async (ctx: RouterContext) => {
  const book = await booksCollection.findOne({
    book_name: ctx.request.url.searchParams.get("book_name"),
  });
  ctx.response.body = book;
};

export { addBook, getBookByName };
