import Hero from './components/hero';
import Navbar from './components/navbar';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-16 bg-white">
            <Navbar />
            <Hero />
        </main>

  );
}
