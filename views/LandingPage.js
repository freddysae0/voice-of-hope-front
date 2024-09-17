import Hero from "@/views/LandingPage/Hero";
import Mission from "@/views/LandingPage/Mission";
import Near from "@/views/LandingPage/Near";
import Sponsored from "@/views/LandingPage/Sponsored";
import Head from "next/head";
import Team from "./LandingPage/Team";

export default function Landing() {
  return (
    <div>
      <Head>
        <title>Voice of hope</title>
      </Head>
      <Hero></Hero>
      <Mission></Mission>
      <Team></Team>
      <Near></Near>
      <Sponsored></Sponsored>
    </div>
  );
}
