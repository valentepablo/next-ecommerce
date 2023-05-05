'use client';

import { useRouter } from 'next/navigation';

export const RefreshButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.refresh()}
      className='px-3 py-1.5 text-xs font-medium transition duration-300 border rounded-md text-zinc-600 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-100'>
      Actualizar
    </button>
  );
};
