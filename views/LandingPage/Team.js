// Supports weights 100-900
import "@fontsource-variable/archivo";
import "@fontsource/rubik-distressed";
import fullteam from "@/assets/LandingPage/team-members/fullteam.png";
import AKRITISHAH from "@/assets/LandingPage/team-members/AKRITI SHAH.png";
import FREDDYSAEZ from "@/assets/LandingPage/team-members/FREDDY SÁEZ.png";
import NIKITAVOITIK from "@/assets/LandingPage/team-members/NIKITA VOITIK.png";
import NILANKNIKHIL from "@/assets/LandingPage/team-members/NILANK NIKHIL.png";
import WAEDHAMED from "@/assets/LandingPage/team-members/WAED HAMED.png";
import Image from "next/image";
import "@fontsource/monoton";
import "@fontsource/bona-nova-sc";

const tmembers = [
  NILANKNIKHIL,
  WAEDHAMED,
  NIKITAVOITIK,
  AKRITISHAH,
  FREDDYSAEZ,
];

export default function Team() {
  return (
    <section
      style={{
        background:
          "linear-gradient(283deg, #FFF 7.57%, rgba(255, 254, 211, 0.80) 100%)",
      }}
      className="min-h-screen relative bg-secondaryLight flex justify-center items-center"
    >
      <h3
        style={{ fontFamily: "'Bona Nova SC', serif" }}
        className="absolute top-12 font-bold text-7xl text-primary"
      >
        Team Members
      </h3>
      <div className="flex">
        {/* {tmembers.map((memberImg) => {
          return <Image className="object-cover" src={memberImg}></Image>;
          })} */}
        <Image
          className="object-cover max-h-[356px] w-auto"
          src={fullteam}
        ></Image>
        ;
      </div>
    </section>
  );
}
