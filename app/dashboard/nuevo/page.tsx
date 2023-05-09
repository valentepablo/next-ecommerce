import { getProducts } from '@/lib/getProducts';
import { ProductContainer, Title } from '../components/index';
import { NewProductForm } from './components/NewProductForm';

const NuevoProductoPage = async () => {
  const products = await getProducts();

  return (
    <div className='h-full'>
      <div className='flex h-full gap-10'>
        <div className='h-full grow'>
          <Title text='todos los productos' />
          <ProductContainer products={products} />
        </div>
        <div className='w-64 shrink-0'>
          <Title text='nuevo producto' />
          <NewProductForm />
        </div>
      </div>
    </div>
  );
};

export default NuevoProductoPage;
