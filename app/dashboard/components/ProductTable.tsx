'use client';

import { Product } from '@/interfaces/interfaces';
import { deleteProduct } from '@/lib/deleteProduct';
import { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { useRouter } from 'next/navigation';

type Props = {
  products: Product[];
};

const ProductTable = ({ products }: Props) => {
  const data = useMemo(() => products.map((product) => product), [products]);
  const columns: any = useMemo(
    () => [
      {
        Header: 'Imagen',
        accessor: 'image',
        Cell: ({ value }: any) => (
          <picture>
            <img
              src={value}
              className='object-cover w-20 mx-auto aspect-square'
              alt='Imagen de producto'
            />
          </picture>
        ),
      },
      {
        Header: 'Nombre',
        accessor: 'name',
      },
      {
        Header: 'Precio',
        accessor: 'price',
      },
      {
        Header: 'Categoria',
        accessor: 'category',
      },
      {
        Header: 'Descripcion',
        accessor: 'description',
      },

      {
        Header: 'En venta',
        accessor: 'onSale',
        Cell: ({ value }: any) => (value === true ? 'Si' : 'No'),
      },
    ],
    []
  );

  const tableHooks = (hooks: any) => {
    hooks.visibleColumns.push((columns: any) => [
      ...columns,
      {
        id: 'edit',
        Header: 'Editar',
        Cell: ({ row }: any) => (
          <button
            className='transition duration-300 hover:text-zinc-100'
            onClick={() => alert('Editando ' + row.values.name)}>
            Editar
          </button>
        ),
      },
      {
        id: 'delete',
        Header: 'Borrar',
        Cell: ({ row }: any) => (
          <button
            className='transition duration-300 hover:text-zinc-100'
            onClick={() => handleDelete(row.original._id)}>
            Borrar
          </button>
        ),
      },
    ]);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy, tableHooks);

  const router = useRouter();

  type Props = {
    productId: string;
  };
  const handleDelete = async (productId: Props) => {
    await deleteProduct(productId);
    console.log('here');
    router.refresh();
  };

  return (
    <table className='w-full mt-4 text-sm text-center' {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column) => (
              <th
                className='p-4 bg-black border border-zinc-900'
                {...column.getHeaderProps(column.getSortByToggleProps())}
                key={column.id}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map((cell, i) => {
                return (
                  <td
                    className='px-4 py-2 border border-zinc-900'
                    {...cell.getCellProps()}
                    key={i}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
