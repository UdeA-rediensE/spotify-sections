import { Sidebar } from '@/components/Sidebar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex h-screen bg-black text-white border-orange-700'>
      <Sidebar />
      <main className='flex flex-col justify-between relative border border-white w-full'>
        <header className='absolute border border-red-700'>
          <div>Arrows Navigation</div>
          <button>Premium</button>
          <button>Support</button>
          <button>Download</button>
          <div></div>
          <button>Sign up</button>
          <button>Log in</button>
        </header>
        <div className='border border-blue-700'>
          <section>
            <h1>Spotify Playlist</h1>
          </section>
          <section>
            <h1>Focus</h1>
          </section>
        </div>
        <footer className='border-violet-700'>
          <div>Company</div>
          <div>Communities</div>
          <div>Useful links</div>
        </footer>
      </main>
    </div>
  )
}
