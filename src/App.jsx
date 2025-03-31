import { CatAxiosAsyncAwait } from "./components/CatAxiosAsyncAwait";
import { CatStuff } from "./components/CatStuff";

export default function App() {
  return (
    <div>
      <CatStuff />
    </div>


    // <div className="min-h-screen flex justify-center bg-blue-950">
    //   <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
    //     <h1 className="w-full p-6 bg-amber-100 font-extrabold">
    //       First Meet with Axios
    //     </h1>
    //     <section className="w-full p-5 bg-amber-100 flex">
    //       <ul className="list-inside list-disc flex-1">
    //         <span className="font-semibold">Examples:</span>
    //         <li>Axios with Async/Await</li>
    //       </ul>
    //     </section>

    //     <section className="w-full p-5 bg-amber-100 flex">
    //       <CatAxiosAsyncAwait />
    //     </section>

    //   </div>
    // </div>
  );
}
