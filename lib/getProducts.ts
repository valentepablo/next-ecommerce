export const getProducts = async () => {
  const res = await fetch(
    'https://next-ecommerce-api.onrender.com/api/products',
    {
      cache: 'no-store',
    }
  );

  return res.json();
};
