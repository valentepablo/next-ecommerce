import { Product } from '@/interfaces/interfaces';
import SelectBox from './SelectBox';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article className='min-h-max'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image}
        alt={product.name}
        className='object-cover w-full h-40'
      />
      <h2 className='mt-1 font-medium text-zinc-300'>{product.name}</h2>
      <p className='text-sm'>{product.description}</p>
      <div className='flex justify-between'>
        <p className='font-bold'>${product.price}</p>
        {/* <SelectBox productId={product._id} selected={product.selected} /> */}
      </div>
    </article>
  );
}
