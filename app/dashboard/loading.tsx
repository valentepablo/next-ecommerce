import { Loader } from './components/Loader';

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-20'>
      <p className='text-xl font-medium'>Cargando...</p>
      <Loader />
    </div>
  );
}
