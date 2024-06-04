import { useEffect, useState } from "preact/hooks";
import axiod from "https://deno.land/x/axiod/mod.ts";

export default function AddBook() {
  const [bookname, setBookname] = useState("");
  const [bookid, setBookid] = useState(0);
  const [price, setprice] = useState(0);
  const [bookadded, setBookadded] = useState(false)
  const [bookaddedname, setbookaddedname] = useState("")
  const addBook = async () => {
    const data = {
        "book_name": bookname,
        "book_id": bookid,
        "price": price,
      }
    const response = await axiod.post("http://localhost:8080/addBook", data);
    console.log(response)
    if(response.status===201){
        alert("Book added Successfully")
        setBookname("")
        setprice(0)
        setBookid(0)
        setBookadded(true);
        setbookaddedname(response.data.book_name)
    }
  };
  return (
    <>
      <div class="w-full h-full flex flex-col items-center justify-evenly">
        <div class="w-1/2 h-[10%] text-2xl flex flex-row items-center justify-evenly">
          Book Name:{" "}
          <input
            value={bookname}
            placeholder="Enter Book Name"
            onChange={(e) => {
              const { target } = e;
              setBookname(target.value);
            }}
          />
        </div>
        <div class="w-1/2 h-[10%] text-2xl flex flex-row items-center justify-evenly">
          Book ID:{" "}
          <input
            type="number"
            placeholder="Enter Book ID"
            value={bookid}
            onChange={(e) => {
              setBookid(Number(e.target.value));
            }}
          />
        </div>
        <div class="w-1/2 h-[10%] text-2xl flex flex-row items-center justify-evenly">
          Price:{" "}
          <input
            type="number"
            placeholder="Enter Book Price"
            value={price}
            onChange={(e) => {
              setprice(Number(e.target.value));
            }}
          />
        </div>
        <div class="w-full h-[10%] text-2xl flex flex-row justify-center items-center">
          <button class="h-full w-1/4 flex justify-center items-center bg-black bg-opacity-10 rounded-lg hover:bg-opacity-5" onClick={addBook}>Add Book</button>
          {bookadded?
          <a href={"/book/"+bookaddedname} class="h-full w-1/4 flex justify-center items-center bg-black bg-opacity-10 rounded-lg hover:bg-opacity-5">See Book Data</a>
          :
          <></>
          }
        </div>
      </div>
    </>
  );
}
