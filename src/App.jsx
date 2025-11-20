import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Sections/Hero/HeroSection'
import MessageSection from './Sections/promotion/MessageSection';


import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <div className="h-dvh border border-red-500" />
    </main>
  )
}

export default App