// Supports weights 100-900
import Button from "@/components/ui/Button";
import "@fontsource-variable/roboto-serif";
import Image from "next/image";
import LogoImg from "@/assets/LandingPage/logo.png";
const classLi = "flex justify-center items-center";
export default function Hero() {
  return (
    <nav className="absolute right-2 min-h-16 flex items-center justify-between px-8 w-full">
      <Image src={LogoImg} height={60}></Image>
      <ul
        className="flex flex-row justify-center gap-10 font-extrabold text-xl text-primary"
        style={{ fontFamily: "'Roboto Serif Variable', serif" }}
      >
        <li className={classLi}>
          <a href="#">Home</a>
        </li>
        <li className={classLi}>
          <a href="#">About Us</a>
        </li>
        <li className={classLi}>
          <a href="#">Campaign</a>
        </li>
        <li className={classLi}>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">
            <Button className={"px-5"}>Register</Button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
