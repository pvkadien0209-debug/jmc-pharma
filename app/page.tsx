import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Blogs from "@/components/Blogs";
import Events from "@/components/Events";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Blogs />
      <Events />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
