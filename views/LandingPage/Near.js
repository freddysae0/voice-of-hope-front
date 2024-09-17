// Supports weights 100-900
import "@fontsource-variable/archivo";
import "@fontsource/rubik-distressed";
import NearImg from "@/assets/LandingPage/near.png";
import decoration1Img from "@/assets/LandingPage/decoration1.png";
import Image from "next/image";
import "@fontsource/monoton";

export default function Mission() {
  return (
    <section className="min-h-screen bg-metal flex justify-center items-center relative">
      <Image src={decoration1Img} className="absolute right-0 top-0 "></Image>
      <div>
        <div className="shadow-xl bg-secondaryLight min-h-[300px] min-w-[800px] max-w-[450px] md:min-w-[644px] text-2xl p-8 rounded-3xl flex flex-col justify-center gap-9 relative ml-52 pl-40">
          <div className="">
            <h3
              style={{ fontFamily: "'Rubik Distressed', system-ui" }}
              className="text-5xl text-primary"
            >
              Near <span className="text-crayonRed">Orphanages</span>
            </h3>
          </div>
          <p
            style={{ fontFamily: "'Archivo Variable', sans-serif" }}
            className="max-w-[280px] md:max-w-[500px] text-primary text-xl  "
          >
            You will be able to see your local orphanages in real time and their
            real needs, sometimes even ones you didn’t know about. It will open
            a door for you to get involved with them.
          </p>
          <Image
            src={NearImg}
            className="absolute -left-48 -top-7 h-full w-auto scale-125"
          ></Image>
        </div>
      </div>
    </section>
  );
}
