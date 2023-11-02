import Image from "next/image";
import Carita from "../../public/img/carita.svg";
import Right from "../../public/img/right.svg";
import Lalo1 from "../../public/img/Lalo_1.svg";
import MainLayout from "@/components/wrappers/MainLayout";
import SVgClipPath from "@/components/SVgClipPath";
import WorkCard from "@/components/WorkCard";
import { SmileIcon, ArrowIcon } from "@/components/Icons";
import Counter from "@/components/Counter";
import ServiceCard from "@/components/ServiceCard";
import TeamCard from "@/components/TeamCard";

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
      <section className="grid grid-cols-12 border-b border-dark-main-text">
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
        <div className="col-span-4 my-[54px] flex flex-col justify-between">
          {/*images */}
          <div className="flex relative">
            <div className="z-1 relative">
              <Image
                src={Lalo1}
                alt="Eduardo Urzua"
                className="relative  z-10"
              />
            </div>
            <div className="w-[80px] h-[80px] relative z-0 flex items-center justify-center border border-bright-yellow rounded-full  -ml-5">
              <ArrowIcon />
            </div>
          </div>
          {/*text*/}
          <div className=" mt-8">
            <p className=" text-dark-main-text  text-2xl leading-8">
              <span className=" uppercase text-bright-yellow">
                The planners
              </span>{" "}
              es una agencia creativa encargada de brindarte una experiencia
              memorable, innovadora, vibrante y única.
            </p>
          </div>
          {/*Animated numbers*/}
          <div>
            <Counter number={50} title="Clientes satisfechos" />
          </div>
          <div>
            <Counter number={100} title="Eventos Realizados" />
          </div>
        </div>
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
      {/*works*/}
      <section className="grid grid-cols-12 gap-x-2 py-[64px] border-b border-dark-main-text">
        {/*title*/}
        <div className="col-span-12 flex justify-between">
          <h2 className=" text-5xl text-white font-bold">
            Works <span className=" text-bright-yellow">//</span>{" "}
            <span className=" text-2xl  font-normal">2023</span>
          </h2>
          <button className=" px-10 py-2 rounded-3xl border border-bright-yellow text-bright-yellow font-bold text-xl">
            Ver todos
          </button>
        </div>
        {/*Cards*/}
        <WorkCard
          imgLink="/img/card_1.jpg"
          boda="Boda X&A"
          lugar="Saltillo, Coah."
          year="2023"
        />
        <WorkCard
          imgLink="/img/card_2.jpg"
          boda="Boda A&D"
          lugar="Saltillo, Coah."
          year="2023"
        />
        <WorkCard
          imgLink="/img/card_3.png"
          boda="Boda D&A"
          lugar="Saltillo, Coah."
          year="2023"
        />
      </section>
      {/*services*/}
      <section className="grid gap-x-[12px] grid-cols-12 my-[60px] border-b border-b-dark-main-text">
        {/*button and title*/}
        <div className=" col-span-12 flex justify-between items-center">
          <button className=" px-10 py-2 rounded-3xl border border-bright-yellow text-bright-yellow font-bold text-xl">
            Agendar una cita
          </button>
          <h2 className=" text-5xl text-white font-bold">
            Services <span className=" text-bright-yellow">//</span>{" "}
            <span className=" text-2xl  font-normal">
              {" "}
              Our areas of expertise
            </span>
          </h2>
        </div>
        {/*Service Cards*/}
        <ServiceCard
          emojiLink="rr"
          serviceDesc="Consultoría de boda"
          serviceNumber="01"
        />
        <ServiceCard
          emojiLink="rr"
          serviceDesc="Selección de proveedores"
          serviceNumber="02"
        />
        <ServiceCard
          emojiLink="rr"
          serviceDesc="Diseño y decoración"
          serviceNumber="03"
        />
        <ServiceCard
          emojiLink="rr"
          serviceDesc="Logística y gestión"
          serviceNumber="04"
        />
      </section>
      {/*Our team*/}
      <section className="grid grid-cols-12 my-[60px] border-b border-b-dark-main-text">
        {/*button and title*/}
        <div className=" col-span-12 flex justify-between items-center">
          <h2 className=" text-5xl text-white font-bold">Our Team</h2>
          <button className=" px-10 py-2 rounded-3xl border border-bright-yellow text-bright-yellow font-bold text-xl">
            Conócenos
          </button>
        </div>
        {/* Team Card */}
        <TeamCard
          imgLink="/img/person_1.png"
          name="Eduardo Urzúa"
          job="Founder"
        />
        <TeamCard
          imgLink="/img/person_2.png"
          name="Valeria Rojas"
          job="Gestión"
        />
        <TeamCard
          imgLink="/img/person_3.png"
          name="Mariana Rmz"
          job="Servicio a cliente"
        />
        <TeamCard
          imgLink="/img/person_4.jpg"
          name="Samuel Velez"
          job="Redes sociales"
        />
      </section>
      {/*Reviews*/}
      <section className="grid grid-cols-12 my-[60px] border-b border-b-dark-main-text">
        {/*title*/}
        <div className="col-span-12 flex justify-between">
          <div className="w-[80px] h-[80px]  flex items-center justify-center border border-bright-yellow rounded-full ">
            <ArrowIcon />
          </div>
          <h2 className=" text-5xl text-white font-bold">
            Testimonios <span className=" text-bright-yellow">//</span>{" "}
            <span className=" text-2xl  font-normal">
              Customer´s kind words
            </span>
          </h2>
        </div>
      </section>
      {/*Banner*/}
    </MainLayout>
  );
}
