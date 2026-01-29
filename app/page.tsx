import Hero from "./components/Hero";
import LazySections from "./components/LazySections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <LazySections />
    </div>
  );
}
