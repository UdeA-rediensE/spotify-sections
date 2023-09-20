import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { Button } from './Button';
import { TextButton } from './TextButton';

const Header = () => {
    return (
        <header className='sticky top-0 flex flex-row justify-between items-center z-30 bg-[rgb(0,0,0,0.5)] py-4 px-6 rounded-t-lg  border-red-700'>
            <div className='text-2xl flex items-center space-x-2'>
                <button className='bg-[#050505] rounded-full cursor-not-allowed'>
                    <GoChevronLeft className='m-1 ' />
                </button>
                <button className='bg-[#050505] rounded-full '>
                    <GoChevronRight className='m-1' />
                </button>
            </div>
            <div className="flex gap-5 items-center">
                <div className='space-x-2 font-extrabold text-secondary-text'>
                    <TextButton text='Premium' />
                    <TextButton text='Support' />
                    <TextButton text='Download' />
                </div>
                <div className="border h-7 mx-3"></div>
                <div className='text-secondary-text font-extrabold space-x-5'>
                    <button className='hover:text-white hover:scale-105'>Sign up</button>
                    <button className="text-black font-extrabold text-sm hover:scale-105" >
                        <span className='bg-white rounded-full py-3 px-8'>Log in</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export { Header }