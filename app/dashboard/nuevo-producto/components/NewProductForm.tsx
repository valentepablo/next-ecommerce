'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface initialProps {
  name: string;
  description: string;
  category: string;
  price: number;
}

const InitialProps = {
  name: '',
  description: '',
  category: '',
  price: 0,
};

export function NewProductForm() {
  const [newProduct, setNewProduct] = useState<initialProps>(InitialProps);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const createProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        'https://next-ecommerce-api.onrender.com/api/products',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        }
      );
      await res.json();
      setNewProduct(InitialProps);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='flex flex-col gap-6 mt-4' onSubmit={createProduct}>
      <input
        name='name'
        value={newProduct.name}
        onChange={handleChange}
        type='text'
        placeholder='Nombre'
        className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
      />
      <input
        name='description'
        value={newProduct.description}
        onChange={handleChange}
        type='text'
        placeholder='Descripcion'
        className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
      />
      <input
        name='price'
        value={newProduct.price}
        onChange={handleChange}
        type='text'
        placeholder='Precio'
        className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
      />
      <input
        name='category'
        value={newProduct.category}
        onChange={handleChange}
        type='text'
        placeholder='Categoria'
        className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
      />
      {/* <input
        type='text'
        placeholder='Imagen'
        className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
      /> */}
      <button
        type='submit'
        className='py-3 text-sm font-medium transition duration-300 border rounded-md text-zinc-100 border-zinc-800 hover:bg-zinc-800'>
        Crear
      </button>
    </form>
  );
}
