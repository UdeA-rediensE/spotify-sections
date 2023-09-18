import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'

interface MainCardProps {
    title: string;
    description: string;
    image: string;
}
const MainCard = ({ title, description, image }: MainCardProps) => {
    return (
        <div className='flex flex-col relative h-[271px] w-[184px] bg-[#181818] hover:bg-[#282828] ease-in duration-200 rounded-md'>
            <div className=' flex flex-col items-center py-4'>
                <Image className={'rounded-[4px] shadow-2xl shadow-gray-900'}
                    src={image}
                    width={148}
                    height={148}
                    alt="Picture of the author"
                />
            </div>
            <div className='flex flex-col px-4 gap-2'>
                <span className='font-extrabold'>{title}</span>
                <span className='text-secondary-text text-sm font-semibold'>{description}</span>
            </div>
            <div className="absolute w-full h-full flex  opacity-0 hover:opacity-100 transition-all ease-in duration-[250ms]  translate-y-2 hover:translate-y-0 transform">
                <button className='bg-[#1fdf64] rounded-full p-4 flex absolute left-[111px] top-[108px] hover:scale-105 '>
                    <FaPlay className="text-black " />
                </button>
            </div>
        </div>
    );
}

export { MainCard }