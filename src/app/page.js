import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/project"
export default function page() {
  return (
    <div>
      <Navbar />
      <main className="scroll-smooth">
      <Home />
      <About />
      <Skill />
      <Project />
      </main>
    </div>
  );
}
