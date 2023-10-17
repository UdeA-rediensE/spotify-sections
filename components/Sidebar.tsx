import { IconButton } from "./IconButton";
import { SpotifyLogo } from "./SpotifyLogo";
import { SidebarCard } from "./SidebarCard";
import { BiLibrary, BiPlus } from "react-icons/bi";
import { GoHomeFill, GoHome } from "react-icons/go";
import {
  PiMagnifyingGlassFill,
  PiMagnifyingGlass,
  PiGlobeSimpleBold,
} from "react-icons/pi";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-[420px] gap-2 overflow-y-auto scrollbox rounded-lg">
      <div className="flex flex-col gap-5 bg-primary-bg  py-4 px-5">
        <SpotifyLogo />
        <IconButton ActiveIcon={GoHomeFill} InactiveIcon={GoHome} text="Home" />
        <IconButton
          InactiveIcon={PiMagnifyingGlass}
          ActiveIcon={PiMagnifyingGlassFill}
          text="Search"
        />
      </div>
      <div className="bg-primary-bg rounded-lg flex flex-grow flex-col">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-3">
            <IconButton
              ActiveIcon={BiLibrary}
              InactiveIcon={BiLibrary}
              text="Your Library"
            />
            <BiPlus className="text-2xl cursor-pointer text-secondary-text hover:text-white hover:bg-[#1a1a1a] rounded-full" />
          </div>
          <div className="flex flex-col gap-2 px-2 pb-2">
            <SidebarCard
              title="Create your first playlist"
              description="It's easy, we'll help you"
              buttonText="Create playlist"
            />

            <SidebarCard
              title="Let's find some podcasts to follow"
              description="We'll keep you updated on new episodes"
              buttonText="Browse podcasts"
            />
          </div>
        </div>
        <div className="text-[0.65rem] text-secondary-text leading-8 font-semibold">
          <div className="flex flex-col   my-8 px-6 ">
            <div className="flex flex-wrap">
              <div className="mr-4">
                <Link href="/" className="mb-2">
                  Legal
                </Link>
              </div>
              <div className="mr-4">
                <Link href="/" className="mb-2">
                  Privacy Center
                </Link>
              </div>
              <div className="mr-4">
                <Link href="/" className="mb-2">
                  Privacy Policy
                </Link>
              </div>
              <div className="mr-4">
                <Link href="/" className="mb-2">
                  Cookies
                </Link>
              </div>
              <div className="mr-4">
                <Link href="/" className="mb-2">
                  About Ads
                </Link>
              </div>
              <div className="mr-4">
                <Link href="/" className="mb-2">
                  Accessibility
                </Link>
              </div>
            </div>
            <Link href="/" className="w-fit hover:underline">
              <span className=" ">Cookies</span>
            </Link>
          </div>
          <div className="font-extrabold text-sm px-6 mb-8 text-white">
            <button className="flex flex-row px-3 py-[5px] gap-1 items-center border border-secondary-text hover:border-white hover:scale-105 rounded-full">
              <PiGlobeSimpleBold className="text-xl" />
              English
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
