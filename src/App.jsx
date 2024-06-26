import * as Sentry from "@sentry/react";
import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className=" bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
  );
}

export default Sentry.withProfiler(App);
