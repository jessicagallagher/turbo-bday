import Image from "next/image";
import Cats from './components/Cats';

export default function Home() {
  return (
    <>
      <main className='flex flex-col justify-center items-center h-full flex-wrap'>
        <h1 className='pb-14 text-purple-800'>IT IS YOUR BIRTHDAY.</h1>
        <Cats />
      </main>
    </>
  );
}
