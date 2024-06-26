// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $addbook from "./routes/addbook.tsx";
import * as $book_bookname_ from "./routes/book/[bookname].tsx";
import * as $index from "./routes/index.tsx";
import * as $AddBook from "./islands/AddBook.tsx";
import * as $BookList from "./islands/BookList.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/addbook.tsx": $addbook,
    "./routes/book/[bookname].tsx": $book_bookname_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/AddBook.tsx": $AddBook,
    "./islands/BookList.tsx": $BookList,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
