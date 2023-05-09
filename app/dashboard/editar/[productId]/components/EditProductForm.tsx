'use client';

import { Product } from '@/interfaces/interfaces';
import { updateProduct } from '@/lib/updateProduct';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  product: Product;
};

export function EditProductForm({ product }: Props) {
  const [editProduct, setEditProduct] = useState(product);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'checkbox') {
      setEditProduct({ ...editProduct, [e.target.name]: e.target.checked });
    } else {
      setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProduct(editProduct._id, editProduct);

    router.push('/dashboard');
  };

  return (
    <form
      className='flex flex-col max-w-6xl gap-10 mt-4'
      onSubmit={handleSubmit}>
      <div className='flex gap-10'>
        <div className='flex flex-col gap-6 grow'>
          <label>
            <span className='block mb-1 text-sm'>Nombre</span>
            <input
              name='name'
              type='text'
              value={editProduct?.name}
              onChange={handleChange}
              className='w-full  px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
            />
          </label>
          <label>
            <span className='block mb-1 text-sm'>Categoria</span>
            <input
              name='category'
              type='text'
              value={editProduct?.category}
              onChange={handleChange}
              className='w-full  px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
            />
          </label>
          <label>
            <span className='block mb-1 text-sm'>Descripcion</span>
            <input
              name='description'
              type='text'
              value={editProduct?.description}
              onChange={handleChange}
              className='w-full  px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
            />
          </label>
          <label>
            <span className='block mb-1 text-sm'>Precio</span>
            <input
              name='price'
              type='number'
              value={editProduct?.price}
              onChange={handleChange}
              className='w-full  px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
            />
          </label>
          <div className='flex gap-10'>
            <label>
              <span className='block mb-1 text-sm'>En venta</span>
              <input
                name='onSale'
                type='checkbox'
                value='onSale'
                checked={editProduct?.onSale}
                onChange={handleChange}
                className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
              />
            </label>
            <label>
              <span className='block mb-1 text-sm'>En oferta</span>
              <input
                name='isOffer'
                type='checkbox'
                value='isOffer'
                checked={editProduct?.isOffer}
                onChange={handleChange}
                className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
              />
            </label>
            <label>
              <span className='block mb-1 text-sm'>Destacado</span>
              <input
                name='isPopular'
                type='checkbox'
                value='isPopular'
                checked={editProduct?.isPopular}
                onChange={handleChange}
                className='px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
              />
            </label>
          </div>
        </div>
        <div>
          <picture>
            <img
              className='h-[500px]'
              src={editProduct?.image}
              alt={editProduct?.name}
            />
          </picture>
        </div>
      </div>
      <button
        type='submit'
        className='py-3 text-sm font-medium transition duration-300 border rounded-md text-zinc-100 border-zinc-800 hover:bg-zinc-800'>
        Guardar cambios
      </button>
    </form>
  );
}

// type InputProps = {
//   type: string;
//   value: any;
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

// const Input = ({ type, value, handleChange }: InputProps) => {
//   return (
//     <input
//       type={type}
//       value={value}
//       onChange={handleChange}
//       className='w-full  px-3 py-1.5 text-sm bg-transparent border rounded-md border-zinc-800 placeholder:text-zinc-500 text-zinc-100'
//     />
//   );
// };
