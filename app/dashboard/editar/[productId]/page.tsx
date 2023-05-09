import { Product } from '@/interfaces/interfaces';
import { getSingleProduct } from '@/lib/getSingleProduct';
import { EditProductForm } from './components/EditProductForm';
import { Title } from '../../components';

type Props = {
  params: {
    productId: string;
  };
};

const ProductPage = async ({ params }: Props) => {
  const { productId } = params;
  const product: Product = await getSingleProduct(productId);
  return (
    <div>
      <Title text='editar producto' />
      <EditProductForm product={product} />
    </div>
  );
};

export default ProductPage;
