import { SectionMain } from "./SectionMain";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

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
    description:
      "Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters",
    image: "/rock.jpeg",
  },
  {
    title: "Chill Hits",
    description: "Kick back to the best new and recent chill hits.",
    image: "/chilPlaya.jpeg",
  },
  {
    title: "Viva Latino",
    description:
      "Today's top Latin hits, elevando nuestra música. Cover: J Balvin",
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
    description:
      "Scores and soundtracks for daring quests, epic journeys, and the greatest reading adventures.",
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
    <div className="absolute pb-8 top-0 w-full min-h-full flex flex-wrap rounded-b-lg rounded-t-lg bg-gradient-to-b from-[#1f1f1f] from-10% via-[#151515] via-30% to-[#0f0f0f] pt-[72px] px-6 ">
      <div className="relative">
        <div className="grid gap-6">
          <SectionMain text="Spotify Playlists" cardData={dataPlaylist} />
          <SectionMain text="Focus" cardData={dataFocus} />
        </div>
        <footer className="w-full relative rounded-b-lg px-2 pb-10 pt-2 mt-12">
          <div className="mt-8  flex flex-row justify-between">
            <div className="flex flex-row text-secondary-text w-full">
              <div className="mr-6 mb-8 flex flex-col gap-2 w-[184px]">
                <h3 className="text-white font-bold">Company</h3>
                <a className="hover:text-white hover:underline cursor-pointer">
                  About
                </a>
                <a className="hover:text-white hover:underline cursor-pointer">
                  Jobs
                </a>
                <a className="hover:text-white hover:underline cursor-pointer">
                  For the Record
                </a>
              </div>
              <div className="mr-6 mb-8 flex flex-col gap-2 w-[184px]">
                <h3 className="text-white font-bold">Communities</h3>
                <a className="hover:text-white hover:underline cursor-pointer">
                  For Artists
                </a>
                <a className="hover:text-white hover:underline cursor-pointer">
                  Developers
                </a>
                <a className="hover:text-white hover:underline cursor-pointer">
                  Advertising
                </a>
                <a className="hover:text-white hover:underline cursor-pointer">
                  Investors
                </a>
                <a className="hover:text-white hover:underline cursor-pointer">
                  Vendors
                </a>
              </div>
              <div className="mr-6 mb-8 flex flex-col gap-2 w-[184px]">
                <h3 className="text-white font-bold">Useful links</h3>
                <a className="hover:text-white hover:underline cursor-pointer">
                  Support
                </a>
                <a className="hover:text-white hover:underline cursor-pointer">
                  Free Mobile App
                </a>
              </div>
            </div>
            <div className="mb-10 flex flex-row gap-3 text-2xl items-start">
              <div className="bg-[#292929] hover:bg-[#727272] p-3 rounded-full">
                <BsInstagram className="text-base" />
              </div>
              <div className="bg-[#292929] hover:bg-[#727272] p-3 rounded-full">
                <BsTwitter className="text-base" />
              </div>
              <div className="bg-[#292929] hover:bg-[#727272] p-3 rounded-full">
                <BsFacebook className="text-base" />
              </div>
            </div>
          </div>
          <hr className="mb-6 border-[rgb(255,255,255,0.1)]" />
          <div className="pt-4">
            <span className="text-secondary-text text-sm font-medium">
              © 2023 Spotify AB
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Main };
