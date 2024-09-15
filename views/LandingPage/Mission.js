// Supports weights 100-900
import "@fontsource-variable/archivo";
import "@fontsource/rubik-distressed";
import MissionImg from "@/assets/LandingPage/mission.png";
import Image from "next/image";
import "@fontsource/monoton";

export default function Mission() {
  return (
    <section className="min-h-screen bg-secondaryLight flex justify-center items-center">
      <div>
        <div className="bg-metal shadow-xl min-h-[600px] max-w-[450px] md:min-w-[644px] -ml-[400px] text-2xl p-8 rounded-2xl flex flex-col justify-center gap-9 relative">
          <div className="flex justify-center">
            <h3
              style={{ fontFamily: "'Rubik Distressed', system-ui" }}
              className="text-5xl text-primary"
            >
              Our <span className="text-crayonYellow">Mission</span>
            </h3>
          </div>
          <p
            style={{ fontFamily: "'Archivo Variable', sans-serif" }}
            className="max-w-[280px] md:max-w-[500px] text-primary p-4 text-xl"
          >
            At <span style={{ fontFamily: "'Monoton', system-ui" }}>voh</span>,
            Our mission is to connect compassionate individuals with orphaned
            children in need. Through our platform, you can directly sponsor a
            child, supporting orphanages with essentials like food and
            education. Together, we can help these children grow and thrive,
            creating a brighter future.
          </p>
          <Image
            src={MissionImg}
            className="absolute -right-[400px] top-0 h-full w-auto"
          ></Image>
        </div>
      </div>
    </section>
  );
}
