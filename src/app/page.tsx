import Image from "next/image";
import Right from "../../public/img/right.svg";
import Lalo1 from "../../public/img/Lalo_1.svg";
import MainLayout from "@/components/wrappers/MainLayout";
import SVgClipPath from "@/components/SVgClipPath";
import WorkCard from "@/components/WorkCard";
import Button from "@/components/Button";
import {
  SmileIcon,
  ArrowIcon,
  Bodas,
  Despedidas,
  Navidad,
  Comuniones,
  SanValentin,
  Cumpleaños,
} from "@/components/Icons";
import Counter from "@/components/Counter";
import TeamCard from "@/components/TeamCard";
import AnimatedLine from "@/components/AnimatedLine";
import ServiceCardV2 from "@/components/ServiceCardV2";
import Carita from "@/components/Carita";

export default function Home() {
  return (
    <MainLayout>
      {/*Hero */}
      <section className="mt-[70px] grid grid-cols-12">
        {/*carita*/}
        <div className=" col-span-3 ">
          <Carita />
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
            <AnimatedLine />
            <p className=" text-[32px] text-dark-main-text">
              Buscamos que tu sueño se vuelva realidad.
            </p>
          </div>
          <Button name="Agendar una cita" />
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

      <section
        id="about-us"
        className="grid grid-cols-12 border-b border-dark-main-text"
      >
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
      <section
        id="works"
        className="grid grid-cols-12 gap-x-2 py-[64px] border-b border-dark-main-text"
      >
        {/*title*/}
        <div className="col-span-12 flex justify-between">
          <h2 className=" text-5xl text-white font-bold">
            Works <span className=" text-bright-yellow">{"//"}</span>{" "}
            <span className=" text-2xl  font-normal">2023</span>
          </h2>
          <Button name="Ver todos" />
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
      <section
        id="services"
        className="grid gap-x-[12px] grid-cols-12 my-[60px] border-b border-b-dark-main-text"
      >
        {/*button and title*/}
        <div className=" col-span-12 flex justify-between items-center">
          <Button name="Agendar una cita" />
          <h2 className=" text-5xl text-white font-bold">
            Services <span className=" text-bright-yellow">{"//"}</span>{" "}
            <span className=" text-2xl  font-normal">
              {" "}
              Our areas of expertise
            </span>
          </h2>
        </div>
        {/*Service Cards*/}
        <ServiceCardV2
          iconElement={<Bodas />}
          numberService="01"
          service="Bodas"
        />
        <ServiceCardV2
          iconElement={<Despedidas />}
          numberService="02"
          service="Despedidas"
        />
        <ServiceCardV2
          iconElement={<Navidad />}
          numberService="03"
          service="Navidad"
        />
        <ServiceCardV2
          iconElement={<Comuniones />}
          numberService="04"
          service="Comuniones"
        />
        <ServiceCardV2
          iconElement={<SanValentin />}
          numberService="05"
          service="San Valentín"
        />
        <ServiceCardV2
          iconElement={<Cumpleaños />}
          numberService="06"
          service="Cumpleaños"
        />
      </section>
      {/*Our team*/}
      <section className="grid grid-cols-12 my-[60px] border-b border-b-dark-main-text">
        {/*button and title*/}
        <div className=" col-span-12 flex justify-between items-center">
          <h2 className=" text-5xl text-white font-bold">Our Team</h2>
          <Button name="Conócenos" />
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
      <section
        id="reviews"
        className="grid grid-cols-12 my-[60px] border-b border-b-dark-main-text"
      >
        {/*title*/}
        <div className="col-span-12 flex justify-between">
          <div className="w-[80px] h-[80px]  flex items-center justify-center border border-bright-yellow rounded-full ">
            <ArrowIcon />
          </div>
          <h2 className=" text-5xl text-white font-bold">
            Testimonios <span className=" text-bright-yellow">{"//"}</span>{" "}
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
