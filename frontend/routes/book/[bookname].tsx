import BookList from "../../islands/BookList.tsx";
import { PageProps } from "$fresh/server.ts";
const books = (props: PageProps) => {
  const bookname = props.params.bookname;
  return (
    <div class="w-screen h-screen bg-[#86efac] flex flex-col items-center justify-evenly">
      <div class="w-full h-[15%] text-3xl font-mono text-center flex justify-center items-center bg-black bg-opacity-10">
        List of all books
      </div>
      <div class="w-full h-[80%]">
        <BookList
          bookname={bookname}
        />
      </div>
    </div>
  );
};

export default books;
