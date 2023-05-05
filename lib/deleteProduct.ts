type Props = {
  productId: string;
};

export const deleteProduct = async (productId: Props) => {
  const response = await fetch(
    `https://next-ecommerce-api.onrender.com/api/products/${productId}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }
  );

  return response.json();
};
