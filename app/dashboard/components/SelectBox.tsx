'use client';

type Props = {
  productId: string;
  selected: boolean;
};

const SelectBox = ({ productId, selected }: Props) => {
  const handleSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(productId);
    const res = await fetch(
      `http://localhost:5000/api/products/select/${productId}`,
      {
        method: 'PATCH',
      }
    );
    const json = await res.json();
    console.log(json);
  };

  return <input type='checkbox' onChange={handleSelect} />;
};

export default SelectBox;
