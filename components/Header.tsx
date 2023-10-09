import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { TextButton } from "./TextButton";

const Header = () => {
  return (
    <header className="sticky top-0 flex flex-row justify-between items-center z-10 bg-[rgb(0,0,0,0.5)] py-4 px-6 rounded-t-lg">
      <div className="text-2xl flex items-center space-x-2">
        <button className="bg-[rgb(0,0,0,0.6)] rounded-full cursor-not-allowed">
          <GoChevronLeft className="m-1 " />
        </button>
        <button className="bg-[rgb(0,0,0,0.6)] rounded-full ">
          <GoChevronRight className="m-1" />
        </button>
      </div>
      <div className="flex gap-5 items-center">
        <div className="space-x-2 font-extrabold text-secondary-text">
          <TextButton text="Premium" />
          <TextButton text="Support" />
          <TextButton text="Download" />
        </div>
        <div className="border h-6 mx-3"></div>
        <div className="text-secondary-text font-extrabold space-x-7">
          <button className="hover:text-white hover:scale-105">Sign up</button>
          <button className="text-black font-extrabold text-sm hover:scale-105">
            <span className="bg-white rounded-full py-[14.5px] px-8">
              Log in
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
