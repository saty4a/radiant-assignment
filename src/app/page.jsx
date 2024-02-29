"use client"
import HomePage from "@/pages/homePage";
import Header from "../components/header";
import Footer from "@/pages/footer";
import { reveal } from "@/components/scrollAnimation";

export default function Home() {
  const isBrowser = () => typeof window !== "undefined";
  if (isBrowser()) {
    window.addEventListener("scroll",reveal);
    return (
      <main className="">
        <Header />
        <HomePage />
        <Footer />
      </main>
    );
  }
}
