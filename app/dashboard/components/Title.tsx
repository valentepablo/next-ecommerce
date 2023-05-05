export function Title({ text }: { text: string }) {
  return (
    <h2 className='text-xl font-medium text-zinc-100 first-letter:capitalize'>
      {text}
    </h2>
  );
}
