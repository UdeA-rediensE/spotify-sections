import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import { BsPlayCircleFill} from 'react-icons/bs'

interface MainCardProps {
    title: string;
    description: string;
    image: string;
}
const MainCard = ({ title, description, image }: MainCardProps) => {
    return (
        <div className='relative p-4 {h-[271px] w-[184px]} bg-[#181818] hover:bg-[#282828] cursor-pointer rounded-md'>
            <div className='flex flex-col items-center'>
                <div className='shadow-2xl shadow-[rgb(0,0,0,0.5)] mb-5'>
                    <Image className={'rounded-[4px]'}
                        src={image}
                        width={150}
                        height={150}
                        alt="Picture of the author"
                    />
                </div>
                <div className='flex flex-col min-h-[62px] max-h-full w-full'>
                    <h2 className='font-extrabold pb-2'>{title}</h2>
                    <p className='text-secondary-text text-sm font-semibold whitespace-normal truncate line-clamp-2 '>{description}</p>
                </div>
                <div className="absolute w-full h-full flex opacity-0 hover:opacity-100 transition-all ease-in duration-300 top-0 translate-y-2 hover:translate-y-0 transform">
                    {/* <BsPlayCircleFill className="absolute text-[#1fdf64] text-5xl  border-[#1fdf64] bg-black rounded-full" />                    */}
                    <button className='bg-[#1fdf64] rounded-full p-4 flex absolute left-[111px] top-[110px] hover:scale-105 '>
                        <FaPlay className="text-black " />
                    </button>
                </div>
            </div>
        </div>
    );
}

export { MainCard }