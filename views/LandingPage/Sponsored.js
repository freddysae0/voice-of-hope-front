import "@fontsource/monoton";
import Image from "next/image";
import decoration2Img from "@/assets/LandingPage/decoration2.png";
import KamramElohiam from "@/assets/LandingPage/sponsors/KamramElohiam.png";
import KanetakaMaki from "@/assets/LandingPage/sponsors/KanetakaMaki.jpg";
import NikolaiTerenia from "@/assets/LandingPage/sponsors/Nikolai Terenia.jpeg";
import SabaTolordava from "@/assets/LandingPage/sponsors/Saba Tolordava.jpeg";
import SergiLaurent from "@/assets/LandingPage/sponsors/Sergi Laurent.jpeg";
import SvetlanaVelikanova from "@/assets/LandingPage/sponsors/Svetlana Velikanova.jpeg";
import DavitMargaryan from "@/assets/LandingPage/sponsors/Davit Margaryan.jpeg";
import Sponsor from "../Sponsored/Sponsor";
const sponsors = [
  { imgSrc: KamramElohiam, name: "Kamram Elohiam", isCompany: false },
  { imgSrc: KanetakaMaki, name: "Kanetaka Maki", isCompany: false },
  { imgSrc: SvetlanaVelikanova, name: "Svetlana Velikanova", isCompany: false },
  { imgSrc: SabaTolordava, name: "Saba Tolordava", isCompany: false },
  { imgSrc: SergiLaurent, name: "Sergi Laurent", isCompany: false },
  { imgSrc: NikolaiTerenia, name: "Nikolai Terenia", isCompany: false },
  { imgSrc: DavitMargaryan, name: "Davit Margaryan", isCompany: false },
];

export default function Sponsored() {
  return (
    <section className="min-h-screen bg-secondaryLight flex justify-center p-20">
      <div className="flex flex-col items-center gap-4">
        <h3
          style={{ fontFamily: "'Rubik Distressed', system-ui" }}
          className="text-5xl text-primary"
        >
          Sponsored by
        </h3>
        <Image src={decoration2Img}></Image>

        {/* SPONSORS LIST */}
        <div className="flex flex-wrap justify-center gap-10 mt-8 max-w-[800px]">
          {sponsors.map((sp) => {
            return (
              <Sponsor
                imgSrc={sp.imgSrc}
                name={sp.name}
                isCompany={sp.isCompany}
              ></Sponsor>
            );
          })}
        </div>
      </div>
    </section>
  );
}
