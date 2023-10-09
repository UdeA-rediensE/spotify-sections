import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Sidebar } from "@/components/Sidebar";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export default function Home() {
  return (
    <div className="flex h-screen p-2 space-x-2 bg-black text-white">
      <Sidebar />

      <OverlayScrollbarsComponent
        className="flex flex-col flex-grow relative"
        style={{ height: "100vh" }}
        options={{
          scrollbars: {
            autoHide: "leave",
            autoHideDelay: 300,
          },
          overflow: {
            x: "hidden",
            y: "scroll",
          },
        }}
      >
        <Header />
        <Main />
      </OverlayScrollbarsComponent>

      {/* <div>
        <footer>
          <div>
            <h4>PREVIEW OF SPOTIFY</h4>
            <span>Sign uo to get unlimited songs and podscasts with occasional ads. No credit card needed</span>
          </div>
          <div>
            <button className="text-black font-extrabold text-sm hover:scale-105" >
              <span className='bg-white rounded-full py-3 px-8'>Sign up free</span>
            </button>
          </div>
        </footer>
      </div> */}
    </div>
  );
}
