import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Sections/Hero/HeroSection'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="h-dvh border border-red-500" />
    </main>
  )
}

export default App