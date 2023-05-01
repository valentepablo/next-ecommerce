import { ProductCard } from './ProductCard';

export function ProductContainer({
  cols,
  products,
}: {
  cols: string;
  products: any[];
}) {
  return (
    <div
      className={`grid h-full grid-cols-${cols} gap-10 py-4 overflow-y-auto custom-scrollbar`}>
      {products.map((item, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
}
