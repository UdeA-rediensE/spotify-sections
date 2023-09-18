import { IconButton } from './IconButton';
import { SpotifyLogo } from './SpotifyLogo';
import { SidebarCard } from './SidebarCard';
import { BiLibrary, BiPlus } from 'react-icons/bi';
import { GoHomeFill, GoHome, GoGlobe } from 'react-icons/go';
import { PiMagnifyingGlassFill, PiMagnifyingGlass } from 'react-icons/pi';

const Sidebar = () => {
    return (
        <aside className='flex flex-col border-green-700 p-2 w-[552px]'>
            <div className='flex flex-col gap-5 bg-primary-bg mb-2 rounded-lg py-4 px-5'>
                <SpotifyLogo />
                <IconButton ActiveIcon={GoHomeFill} InactiveIcon={GoHome} text='Home' />
                <IconButton InactiveIcon={PiMagnifyingGlass} ActiveIcon={PiMagnifyingGlassFill} text='Search' />
            </div>
            <div className='bg-primary-bg rounded-lg flex flex-col h-full'>
                <div className='border-green-700 flex flex-col h-full'>
                    <div className='flex items-center justify-between px-5 py-4'>
                        <IconButton ActiveIcon={BiLibrary} InactiveIcon={BiLibrary} text='Your Library' />
                        <BiPlus className='text-2xl cursor-pointer text-secondary-text hover:text-white hover:bg-[#1a1a1a] rounded-full' />
                    </div>
                    <div className='flex flex-col gap-5 px-2 pb-2'>
                        <SidebarCard
                            title='Create your first playlist'
                            description="It's easy, we'll help you"
                            buttonText='Create playlist'
                        />

                        <SidebarCard
                            title="Let's find some podcasts to follow"
                            description="We'll keep you updated on new episodes"
                            buttonText='Browse podcasts'
                        />
                    </div>
                </div>
                <div className='flex flex-wrap gap-5 text-xs/[10px] text-secondary-text mt-8 px-6 font-thin'>
                    <span className='cursor-pointer'>Legal</span>
                    <span className='cursor-pointer'>Privacy Center</span>
                    <span className='cursor-pointer'>Privacy Policy</span>
                    <span className='cursor-pointer'>Cookies</span>
                    <span className='cursor-pointer'>About Ads</span>
                    <span className='cursor-pointer'>Accessibility</span>
                </div>
                <a href="#" className='mt-5 px-6 hover:underline text-secondary-text text-xs/[10px] font-thin'>
                    <span>Cookies</span>
                </a>
                <div className='font-bold text-sm px-6 pb-8 pt-9'>
                    <button className='px-3 py-1 flex flex-row gap-1 items-center border border-secondary-text hover:border-white hover:scale-105 rounded-full'>
                        <GoGlobe className=' text-lg cursor-pointer text-white hover:bg-[#1a1a1a] rounded-full' />
                        <span>English</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}

export { Sidebar };