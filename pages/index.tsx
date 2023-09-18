import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className='relative flex flex-row h-screen w-screen bg-black text-white border-orange-700 '>
      <Sidebar />
      <main className='relative flex flex-col border-white w-screen py-2 mr-2 overflow-auto'>
        <Header />
        <Main />
        <footer className='absolute w-full bottom-0 rounded-b-lg border-violet-700'>
          <div>Company</div>
          <div>Communities</div>
          <div>Useful links</div>
        </footer>
      </main>
    </div>
  )
}
