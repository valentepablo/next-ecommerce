import { ProductContainer } from '../components/ProductContainer';

export default function Page() {
  const arr = new Array(20).fill('a');

  return (
    <div className='h-full'>
      <div className='flex h-full gap-10'>
        <div className='h-full'>
          <h2 className='text-xl font-medium text-zinc-100'>
            Todos los productos
          </h2>
          <ProductContainer cols={'3'} products={arr} />
        </div>
        <div className='w-64 shrink-0'>
          <h2 className='text-xl font-medium text-zinc-100'>Nuevo Producto</h2>
          <form className='flex flex-col gap-6 mt-4'>
            <input
              type='text'
              placeholder='Nombre'
              className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800'
            />
            <input
              type='text'
              placeholder='Descripcion'
              className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800'
            />
            <input
              type='text'
              placeholder='Precio'
              className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800'
            />
            <input
              type='text'
              placeholder='Categoria'
              className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800'
            />
            <input
              type='text'
              placeholder='Imagen'
              className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800'
            />
            <button className='py-3 text-sm font-medium transition duration-300 border rounded-md text-zinc-100 border-zinc-800 hover:bg-zinc-800'>
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
