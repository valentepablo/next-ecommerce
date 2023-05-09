export const getSingleProduct = async (productId: string) => {
  const res = await fetch(
    `https://next-ecommerce-api.onrender.com/api/products/${productId}`,
    {
      cache: 'no-store',
    }
  );

  return res.json();
};
