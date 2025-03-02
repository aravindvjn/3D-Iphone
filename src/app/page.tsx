import CanvasViewer from "@/components/canvas-viewer";
import Features from "@/components/features";
import Hero from "@/components/hero";
import NavBar from "@/components/nav-bar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Features />
      <CanvasViewer />
    </Fragment>
  );
}
