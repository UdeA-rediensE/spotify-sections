import { MainCard } from './MainCard';
const Main = () => {
    return (
        <div className='absolute w-full rounded-t-lg bg-primary-bg border-blue-700 pt-[72px] px-6 '>
            <section className="">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-2xl text-white font-extrabold hover:underline cursor-pointer">Spotify Playlists</h1>
                    <span className="text-secondary-text text-sm font-extrabold hover:underline cursor-pointer">Show all</span>
                </div>
                <div className='flex pt-5 gap-6'>
                    <MainCard
                        title="Today's Top Hits"
                        description="Jung Kook is on top of the Hottest 50!"
                        image="/bts.jpeg"
                    />
                    <MainCard
                        title="RapCaviar"
                        description="New music from Drake, Rod Wave and Doja..."
                        image="/rapCaviar.jpeg"
                    />
                    <MainCard
                        title="All Out 2010s"
                        description="The biggest songs of the 2010s."
                        image="/bruno.jpeg"
                    />
                    <MainCard
                        title="Rock Classics"
                        description="Rock legends & epic songs that continue to.."
                        image="/rock.jpeg"
                    />
                    <MainCard
                        title="Chill Hits"
                        description="Kick back to the best new and recent chill..."
                        image="/chilPlaya.jpeg"
                    />
                    <MainCard
                        title="Viva Latino"
                        description="Today's top Latin hits, elevando nuestra..."
                        image="/balvin.jpeg"
                    />
                    <MainCard
                        title="Mega Hit Mix"
                        description="A mega mix of 75 favorites from the last..."
                        image="/ariana.jpeg"
                    />
                </div>

            </section>
            <section>
                <h1>Focus</h1>
            </section>
        </div>
    );
}

export { Main }