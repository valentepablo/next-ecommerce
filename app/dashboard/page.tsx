import { getProducts } from '@/lib/getProducts';
import { Title } from './components';
import { RefreshButton } from './components/RefreshButton';
import ProductTable from './components/ProductTable';

const Dashboard = async () => {
  const products = await getProducts();

  return (
    <div className='h-full'>
      <div className='flex items-center justify-between'>
        <Title text='todos los productos' />
        <RefreshButton />
      </div>
      <ProductTable products={products} />
    </div>
  );
};

export default Dashboard;
