import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Sidebar } from '@/components/Sidebar'

const temp = () => {
  return (
    <div className="flex h-screen p-2 space-x-2 ">
      {/* Aside */}
      <aside className="flex flex-col gap-2 w-[420px] bg-gray-200 rounded-lg border border-black ">
        {/* Primera parte del aside */}
        <div className="p-4 flex flex-col items-start gap-2 border border-red-500">
          <h2 className=" text-lg font-semibold">Opciones</h2>
          <button className="my-2">Botón 1</button>
          <button className="my-2">Botón 2</button>
        </div>
        {/* Segunda parte del aside */}
        <div className="flex-grow p-4 border-2 border-green-400">
          {/* Dos cards */}
          <div className='full-h mb-4 space-y-2'>
            <div className="">
              <div className="bg-white p-4 shadow-lg">
                {/* Contenido de la primera card */}
              </div>
            </div>
            <div>
              <div className="bg-white p-4 shadow-lg">
                {/* Contenido de la segunda card */}
              </div>
            </div>
          </div>
          {/* Footer del aside */}
          <div className="mt-4">
            <ul>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Cookies</a></li>
              {/* Otros enlaces importantes */}
            </ul>
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-grow relative w-full overflow-y-auto">
        {/* Header fijo en la parte superior */}
        <header className="p-8 bg-blue-300 opacity-20 w-full z-50 sticky top-0">
          {/* Botones y contenido del header */}
        </header>

        {/* Contenido principal */}
        <div className="p-4 border border-black top-0 absolute w-full">
          {/* Tarjetas con imágenes y texto */}
          <div className="mb-4">
            <div className="bg-white p-4 shadow-lg">
              {/* Contenido de la tarjeta 1 */}
            </div>
          </div>
          <div className="mb-4">
            <div className="bg-white p-4 shadow-lg">
              {/* Contenido de la tarjeta 2 */}
            </div>
          </div>
          {/* Más tarjetas según sea necesario */}
        </div>

        {/* Footer */}
{/*         
        <footer className="p-4 bg-gray-300">
         
        </footer> */}

      </main>
    </div>

  )
}

export default temp;