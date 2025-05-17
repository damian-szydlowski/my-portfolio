import About from '../components/About';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>

    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Damian 👋</h1>
      <p className="text-lg text-gray-400">Welcome to my portfolio site
      </p>

      <About />
    </main>
    </>    
  );
}
