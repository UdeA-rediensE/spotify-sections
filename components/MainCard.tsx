import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface MainCardProps {
  title: string;
  description: string;
  image: string;
}
const MainCard = ({ title, description, image }: MainCardProps) => {
  return (
    <div className="relative p-4 bg-[#181818] hover:bg-[#282828] hover:ease-out duration-300 cursor-pointer rounded-md">
      <div className="flex flex-col items-center">
        <div className="shadow-2xl shadow-[rgb(0,0,0,0.5)] mb-5">
          <Image
            className={"rounded-[4px]"}
            src={image}
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col min-h-[62px] max-h-full w-full">
          <h2 className="font-extrabold pb-2 line-clamp-1 truncate">{title}</h2>
          <p className="text-secondary-text text-sm font-semibold whitespace-normal line-clamp-2 ">
            {description}
          </p>
        </div>
        <div className="absolute w-full h-full flex top-0 group ">
          <button className="bg-[#1fdf64] rounded-full p-4 absolute left-[111px] top-[110px] opacity-0 group-hover:opacity-100 group-hover:scale-105 translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-in">
            <FaPlay className="text-black " />
          </button>
        </div>
      </div>
    </div>
  );
};

export { MainCard };
