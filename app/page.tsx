import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";

export default function HomePage() {
  return (
    <div className="flex max-w-full mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center background-gradient">
        <Slider/>
        <h1 className="mx-auto mt-10 max-w-4xl font-display text-5xl font-bold tracking-normal text-black-300 sm:text-7xl">
          Unlock Your Dream Space{" "}
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-black-400  text-gray-500 leading-7">
          Generate Snap a Photo of Your Room and Explore It in Various Themes. Completely Free – Redesign Your Space Today!
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream"
        >
          Create Your Dream Space
        </Link>
      </main>
      <Footer />
    </div>
  );
}
