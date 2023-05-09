import { Product } from '@/interfaces/interfaces';
import { ProductCard } from './index';

type Props = {
  products: Product[];
};

export function ProductContainer({ products }: Props) {
  return (
    <div className='h-full py-4'>
      {products.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <div className='gap-10 pr-1 overflow-y-auto product-container-grid custom-scrollbar'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
