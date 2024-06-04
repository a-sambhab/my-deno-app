import AddBook from "../islands/AddBook.tsx";

const addbook = () => {
  return (
    <div class="w-screen h-screen bg-[#86efac] flex flex-col items-center justify-evenly">
      <div class="w-full h-[15%] text-3xl font-mono text-center flex justify-center items-center bg-black bg-opacity-10">
        List of all books
      </div>
      <div class="w-full h-[80%]">  
      <AddBook/>
      </div>
    </div>
  );
};

export default addbook;
