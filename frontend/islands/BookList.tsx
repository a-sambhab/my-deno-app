import { useEffect, useState } from "preact/hooks";
import axiod from "https://deno.land/x/axiod/mod.ts";

export default function BookList(props: { bookname: string }) {
  const [bookdata, setBookdata] = useState({
    book_name: "",
    book_id: "",
    price: 0,
  });
  const getBook = async () => {
    const response = await axiod.get(
      `http://localhost:8080/getBookByName?book_name=${props.bookname}`,
      {
        headers: {
          "Access-Control-Request-Headers": "*",
          "Access-Control-Request-Method": "*",
        },
      },
    );
    setBookdata(response.data);
  };
  useEffect(() => {
    getBook();
  }, []);

  return (
    <>
      <div class="w-full h-full">
        <div class="w-full h-[10%] text-2xl">
          Book Name: {bookdata.book_name}
        </div>
        <div class="w-full h-[10%] text-2xl">Book ID: {bookdata.book_id}</div>
        <div class="w-full h-[10%] text-2xl">Price: {bookdata.price}</div>
      </div>
    </>
  );
}
