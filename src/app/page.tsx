import About from '../components/About';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <>

    <Navbar />
    <Banner />
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">

      <About />
    </main>
    </>    
  );
}
