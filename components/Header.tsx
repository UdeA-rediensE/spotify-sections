import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { Button } from './Button';
import { TextButton } from './TextButton';

const Header = () => {
    return (
        <header className='sticky flex flex-row justify-between items-center z-30 bg-[rgb(0,0,0,0.7)] py-3 rounded-t-lg  border-red-700'>
            <div className='text-2xl pl-7 space-x-2'>
                <button className='bg-[#050505] rounded-full cursor-not-allowed'>
                    <GoChevronLeft className='m-1 ' />
                </button>
                <button className='bg-[#050505] rounded-full '>
                    <GoChevronRight className='m-1' />
                </button>
            </div>
            <div className="flex gap-5 pr-5 items-center">
                <div className='space-x-2 font-bold text-secondary-text'>
                    <TextButton text='Premium' />
                    <TextButton text='Support' />  
                    <TextButton text='Download' />
                </div>
                <div className="border h-7 mx-3"></div>
                <div className='text-secondary-text font-bold space-x-5'>
                    <button className='hover:text-white hover:scale-105'>Sign up</button>
                    <Button text='Log in' height='48px' width='112px' />
                </div>
            </div>
        </header>
    );
}

export { Header }