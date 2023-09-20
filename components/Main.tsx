import { SectionMain } from './SectionMain';
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'

const dataPlaylist = [
    {
        title: "Today's Top Hits",
        description: "Jung Kook is on top of the Hottest 50!",
        image: "/bts.jpeg",
    },
    {
        title: "RapCaviar",
        description: "New music from Drake, Rod Wave and Doja Cat.",
        image: "/rapCaviar.jpeg",
    },
    {
        title: "All Out 2010s",
        description: "The biggest songs of the 2010s.",
        image: "/bruno.jpeg",
    },
    {
        title: "Rock Classics",
        description: "Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters",
        image: "/rock.jpeg",
    },
    {
        title: "Chill Hits",
        description: "Kick back to the best new and recent chill hits.",
        image: "/chilPlaya.jpeg",
    },
    {
        title: "Viva Latino",
        description: "Today's top Latin hits, elevando nuestra música. Cover: J Balvin",
        image: "/balvin.jpeg",
    },
    {
        title: "Mega Hit Mix",
        description: "A mega mix of 75 favorites from the last few years!",
        image: "/ariana.jpeg",
    },
];

const dataFocus = [
    {
        title: "Peaceful Piano",
        description: "Peaceful piano to help you slow down, breathe, and relax.",
        image: "/piano.jpeg",
    },
    {
        title: "Deep Focus",
        description: "Keep calm and focus with ambient and post-rock music.",
        image: "/deepFocus.jpeg",
    },
    {
        title: "Instrumental Study",
        description: "Focus with soft study music in the background.",
        image: "/studyInstrumental.jpeg",
    },
    {
        title: "Focus Flow",
        description: "Uptempo instrumental hip hop beats.",
        image: "/focus.jpeg",
    },
    {
        title: "Workday Lounge",
        description: "Lounge and chill out music for your workday.",
        image: "/work.jpeg",
    },
    {
        title: "Reading Adventure",
        description: "Scores and soundtracks for daring quests, epic journeys, and the greatest reading adventures.",
        image: "/adventure.jpeg",
    },
    {
        title: "Beats to think to",
        description: "Focus with melodic techno and tech house.",
        image: "/beats.jpeg",
    },
];

const Main = () => {
    return (
        <div className='absolute pb-8 top-0 w-full flex flex-wrap rounded-t-lg bg-gradient-to-b from-[#1f1f1f] via-[#151515] via-40% to-[#0f0f0f]  border-blue-700 pt-[72px] px-6 '>
            <div className=''>
                <SectionMain text="Spotify Playlists" cardData={dataPlaylist} />
                <SectionMain text="Focus" cardData={dataFocus} />
                <footer className='w-full bottom-0 rounded-b-lg px-8 pb-10 pt-2 border-violet-700'>
                    <div className='mt-8 flex flex-row justify-between'>
                        <div className='flex flex-row text-secondary-text w-full'>
                            <div className='mr-6 mb-8 flex flex-col '>
                                <h3 className='text-white font-bold'>Company</h3>
                                <a>About</a>
                                <a>Jobs</a>
                                <a>For the Record</a>
                            </div>
                            <div className='mr-6 mb-8 flex flex-col'>
                                <h3 className='text-white font-bold'>Communities</h3>
                                <a>For Artists</a>
                                <a>Developers</a>
                                <a>Advertising</a>
                                <a>Investors</a>
                                <a>Vendors</a>
                            </div>
                            <div className='mr-6 mb-8 flex flex-col'>
                                <h3 className='text-white font-bold'>Useful links</h3>
                                <a>Support</a>
                                <a>Free Mobile App</a>
                            </div>
                        </div>
                        <div className='mb-10 flex flex-row gap-2 text-2xl'>
                            <div className='bg-[#292929] hover:bg-[#727272] rounded-full'>
                                <BsInstagram className=" " />
                            </div>
                            <div>
                                <BsTwitter />
                            </div>
                            <div>
                                <BsFacebook />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='pt-4'>
                        <span>© 2023 Spotify AB</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export { Main }