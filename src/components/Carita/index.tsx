"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer";
import {
  CaritaNormal,
  CaritaEstrellas,
  CaritaOjoCerrado,
  CaritaFull,
  CaritaMasFeli,
  CaritaRara,
  CaritaTriste,
  // Agrega más importaciones para otros tipos de caritas
} from "./assets";

const Carita = () => {
  const [iconShown, setIconShown] = useState(0);

  const icons = [
    { id: 0, icon: <CaritaNormal /> },
    { id: 1, icon: <CaritaOjoCerrado /> },
    { id: 2, icon: <CaritaEstrellas /> },
    { id: 3, icon: <CaritaFull /> },
    { id: 4, icon: <CaritaMasFeli /> },
    { id: 5, icon: <CaritaRara /> },
    { id: 6, icon: <CaritaTriste /> },

    // Agrega más objetos según tus necesidades
  ];

  useEffect(() => {
    const changeIcon = () => {
      setIconShown((prevIconShown) =>
        prevIconShown + 1 === icons.length ? 0 : prevIconShown + 1
      );
    };

    const intervalId = setInterval(changeIcon, 1250);

    // Limpia el intervalo anterior al desmontar el componente
    return () => clearInterval(intervalId);
  }, [icons.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {icons.map(
          (item) =>
            iconShown === item.id && (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  duration: 0.25,
                }}
              >
                {item.icon}
              </motion.div>
            )
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Carita;
