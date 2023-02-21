import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import Sun from "./icons/Sun";


const initialStateDark = localStorage.getItem('theme') === 'dark';


const Header = () => {
  const [dark, setDark] = useState(initialStateDark);

  useEffect(() => {

    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark');
       localStorage.setItem("theme", "light")
    }
  }, [dark]);

  return (
    // {/* Header */}
    <header className="container mx-auto px-5 pt-9 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold uppercase tracking-[1rem] text-white transition-all duration-700 dark:text-purple-300 ">
          Todo
        </h1>
        <button onClick={() => setDark(!dark)}>
          {dark ? <Sun className="fill-purple-300" /> : <MoonIcon />}
          {/* checar en el area de sun.jsx los cambios que se hicieron para recibir el props y poder poner la clase */}
        </button>
      </div>
    </header>
  );
};

export default Header;