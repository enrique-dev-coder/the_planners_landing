import Image from "next/image";
import Carita from "../../public/img/carita.svg";
import Right from "../../public/img/right.svg";
import MainLayout from "@/components/wrappers/MainLayout";
import SVgClipPath from "@/components/SVgClipPath";
import { SmileIcon } from "@/components/Icons";

export default function Home() {
  return (
    <MainLayout>
      {/*Hero */}
      <section className="mt-[70px] grid grid-cols-12">
        {/*carita*/}
        <div className=" col-span-3 ">
          <Image
            src={Carita}
            alt="Di hola a tu mejor dia"
            width={175}
            className="mx-auto  pt-10 "
          />
        </div>
        {/*text intro*/}
        <div className=" col-span-9  flex  flex-col gap-[52px]">
          <div>
            <h1
              style={{ lineHeight: "108px" }}
              className=" text-9xl w-full font-bold text-dark-main-text"
            >
              Di <span className=" text-bright-yellow">hola</span> <br /> a tu
              mejor dia.
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            {/*line*/}
            <div className=" h-[2px]  bg-dark-main-text w-[238px]" />
            <p className=" text-[32px] text-dark-main-text">
              Buscamos que tu sueño se vuelva realidad.
            </p>
          </div>
          <div className="flex justify-end">
            <button className=" text-bright-yellow border border-bright-yellow  px-11 py-2 rounded-3xl text-xl font-bold">
              Agendar una cita
            </button>
          </div>
        </div>
      </section>
      {/*divider*/}
      <div className=" relative  h-[80px]  my-4 flex items-center">
        <div className="w-full h-[2px] bg-dark-main-text" />
        <div className="w-[80px] h-[80px] absolute top-0 right-1/2    bg-dark-main-text flex justify-center items-center rounded-full">
          <Image src={Right} alt="ver mas" className=" animate-newBounceAnim" />
        </div>
      </div>
      {/*About us*/}
      <section className="grid grid-cols-12">
        <div className="col-span-12  text-right">
          <h2
            style={{ lineHeight: "30px" }}
            className=" text-5xl font-bold text-dark-main-text"
          >
            About
            <span className=" text-4xl text-bright-yellow  uppercase">
              <br />
              the planners
            </span>
          </h2>
        </div>
        {/*info*/}
        <div className="col-span-4 my-[54px]"></div>
        {/*image*/}
        <div className="col-span-8 my-[54px] relative">
          <SVgClipPath />
          <div
            style={{ borderRadius: "80px" }}
            className="w-[258px] h-[232px] bg-bright-yellow absolute right-0 bottom-0 flex flex-col justify-center items-center"
          >
            <p className=" leading-10 text-[32px] font-bold  mb-4 text-center">
              Creamos experiencias
            </p>
            <SmileIcon />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
