import Image from "next/image";
import "@fontsource-variable/archivo";
import "@fontsource/anton-sc";
export default function Sponsor({ imgSrc, name, isCompany }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        className="rounded-full border-solid "
        src={imgSrc}
        width={140}
        height={140}
      ></Image>
      <h5
        className="text-xl text-primary"
        style={{ fontFamily: "'Anton SC', sans-serif" }}
      >
        {name}
      </h5>
      <h6
        className="font-extrabold -mt-3 text-crayonRed"
        style={{ fontFamily: "'Archivo Variable', sans-serif" }}
      >
        {" "}
        {isCompany ? "Company" : "Individual"}
      </h6>
    </div>
  );
}
