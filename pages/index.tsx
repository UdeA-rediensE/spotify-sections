import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Sidebar } from '@/components/Sidebar'


export default function Home() {
  return (
    <div className='flex h-screen p-2 space-x-2 bg-black text-white '>
      <Sidebar />
      <main className='flex-grow  border-green-600 relative overflow-y-scroll scrollbox'>
        <Header />
        <Main />
      </main>
    </div>
  )
}
