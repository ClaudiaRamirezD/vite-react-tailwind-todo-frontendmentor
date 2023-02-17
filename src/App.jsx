import React from "react";
import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat ">
      <header className="container mx-auto px-5 pt-9 ">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold uppercase tracking-[1rem] text-white">
            Todo
          </h1>
          <button>
            <MoonIcon className='fill-red-500'/>
          </button>
        </div>
        <form className="mt-10 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4">
          <span className="inline-block h-5 w-5 rounded-full border-2 "></span>
          <input
            type="text"
            placeholder="Create a new ToDo..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto mt-5 px-5">
        <div className="rounded-md bg-white">
          {/* En vez de que a cada article se le agregue el padding se le puede poner de esta forma al padre [&>article]:p-4 */}
          <article className="flex items-center gap-4 border-b border-b-gray-300 py-4 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online JavaScript course
            </p>
            <button className="">
              <CrossIcon />
            </button>
          </article>
          <article className="flex items-center gap-4 border-b border-b-gray-300 py-4 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online JavaScript course
            </p>
            <button className="">
              <CrossIcon />
            </button>
          </article>
          <article className="flex items-center gap-4 border-b border-b-gray-300 py-4 px-4">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="grow text-gray-600">
              Complete online JavaScript course
            </p>
            <button className="">
              <CrossIcon />
            </button>
          </article>
          <section className="flex justify-between p-4">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto mt-5 px-4">
        <div className="flex justify-center gap-4 rounded-md bg-white">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <p className="text-center mt-5">Drag & drop to order</p>
    </div>
  );
};

export default App;
