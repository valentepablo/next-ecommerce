import Link from 'next/link';
export default async function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Link
        href={'/dashboard'}
        className='px-4 py-2 text-sm transition bg-black border border-transparent rounded-md duration-400 text-zinc-100 hover:bg-transparent hover:border-black hover:text-black'>
        Login
      </Link>
    </div>
  );
}
