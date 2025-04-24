import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Achievements from "./components/Achievements";
import NewsSection from "./components/News";
import ReviewForm from "./components/ReviewForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Achievements />
      {/* <NewsSection /> */}
      <ReviewForm />
    </>
  );
}
