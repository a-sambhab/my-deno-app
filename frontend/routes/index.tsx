import { useSignal } from "@preact/signals";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-evenly h-screen">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <div class="h-[5%] w-full bg-black bg-opacity-20 flex flex-row items-center justify-evenly rounded-lg">
          <a href="book/Book1" class="bg-[#86efac] h-[90%] w-1/3 text-center rounded-lg">Get Book 1</a>
          <a href="addbook" class="bg-[#86efac] h-[90%] w-1/3 text-center rounded-lg">Add a Book</a>
        </div>
      </div>
    </div>
  );
}
