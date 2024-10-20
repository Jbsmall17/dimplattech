import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Header 
        page={"home"}
      />
      <Hero />
      <Services />
      <Courses />
      <Teams />
      <Testimonials />
      <Subscribe />
      <Footer />
    </main>
  );
}
