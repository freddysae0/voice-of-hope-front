import Hero from "@/views/LandingPage/Hero";
import Mission from "@/views/LandingPage/Mission";
import Near from "@/views/LandingPage/Near";
import Sponsored from "@/views/LandingPage/Sponsored";
import Head from "next/head";

export default function Landing() {
  return (
    <div>
      <Head>
        <title>Voice of hope</title>
      </Head>
      <Hero></Hero>
      <Mission></Mission>
      <Near></Near>
      <Sponsored></Sponsored>
    </div>
  );
}
