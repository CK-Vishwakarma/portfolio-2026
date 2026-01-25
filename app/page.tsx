import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  ScrollToTop,
  Skills,
} from './components';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
