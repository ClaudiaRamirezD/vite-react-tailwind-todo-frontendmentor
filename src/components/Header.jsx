import MoonIcon from "./icons/MoonIcon";

const Header = () => {
  return (
    // {/* Header */}
      <header className="container mx-auto px-5 pt-9 ">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold uppercase tracking-[1rem] text-white">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-red-500" />
          </button>
        </div>
      </header>
  )
}

export default Header;