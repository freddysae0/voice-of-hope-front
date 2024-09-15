import Navbar from "@/views/LandingPage/Hero/Navbar";
import Image from "next/image";
import HeroImg from "@/assets/LandingPage/hero.png";
import decoration3Img from "@/assets/LandingPage/decoration3.png";
import Button from "@/components/ui/Button";
import "@fontsource/calistoga";
import "@fontsource/lisu-bosa";

export default function Hero() {
  return (
    <section className="min-h-screen bg-metal">
      <Navbar></Navbar>
      <div className="flex justify-between items-center">
        <div className="pl-7 md:pl-24  flex flex-col gap-5">
          <h1
            style={{ fontFamily: "'Calistoga', system-ui" }}
            className="text-8xl text-primary leading-tight max-w-[400px] "
          >
            VOICE OF <span className="text-secondary">HOPE</span>
          </h1>
          <div
            style={{ fontFamily: "'Lisu Bosa', serif" }}
            className="text-primary"
          >
            <h3 className="font-semibold text-2xl">
              {" "}
              Support, Donate, Inspire!
            </h3>
            <p className="font-medium italic text-xl">
              Because everyone deserves an opportunity
            </p>
          </div>
          <div className="min-w-40 ml-16 relative">
            <Button className="px-7">Support a life</Button>
            <Image
              className="absolute -left-40 -top-4"
              src={decoration3Img}
            ></Image>
          </div>
        </div>
        <Image
          className="max-h-screen w-auto "
          src={HeroImg}
          alt="Orphanage kids"
        ></Image>
      </div>
    </section>
  );
}
