import { ProductContainer } from './components/ProductContainer';

const Dashboard = () => {
  const arr = new Array(50).fill('a');

  return (
    <div className='h-full'>
      <h2 className='text-xl font-medium text-zinc-100'>Todos los productos</h2>
      <ProductContainer cols={'4'} products={arr} />
    </div>
  );
};

export default Dashboard;
