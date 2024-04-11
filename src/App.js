import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sections/Sidebar";
import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import CTA from "./Sections/CTA";

function App() {
  return (
    <div className="relative w-full min-h-screen flex flex-1 bg-black">
      <div className="relative w-[240px] hidden lg:block">
        <Sidebar />
      </div>
      <div className="relative w-full flex-1 max-w-[1080px] mx-auto px-2">
        <Hero />
        <Features />
        <CTA />
      </div>
    </div>
  );
}

export default App;
