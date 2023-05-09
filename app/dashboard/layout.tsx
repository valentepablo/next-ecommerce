import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen mx-auto text-zinc-500 max-w-7xl '>
      <aside className='w-64 p-10 shrink-0'>
        <ul className='flex flex-col gap-6'>
          <DashboardLink
            path='dashboard'
            name='productos'
            icon={<ProductsIcon />}
          />
          <DashboardLink
            path='dashboard/nuevo'
            name='añadir producto'
            icon={<CreateProductIcon />}
          />
        </ul>
      </aside>
      <main className='p-10 overflow-y-hidden grow'>{children}</main>
    </div>
  );
};

export default Layout;

const ProductsIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-5 h-5'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
      />
    </svg>
  );
};

const CreateProductIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-5 h-5'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>
  );
};

const DashboardLink = ({
  path,
  name,
  icon,
}: {
  path: string;
  name: string;
  icon: JSX.Element;
}) => {
  return (
    <Link
      href={`/${path}`}
      className='flex items-center gap-4 text-sm transition duration-300 hover:text-zinc-100'>
      {icon}
      <span className='capitalize'>{name}</span>
    </Link>
  );
};
