import { Product } from '@/interfaces/interfaces';

export const updateProduct = async (productId: string, product: Product) => {
  const res = await fetch(
    `https://next-ecommerce-api.onrender.com/api/products/${productId}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    }
  );

  return res.json();
};
