import React, { useState } from "react";
import Image from "../components/common/Image";
import Flex from "./../components/common/Flex";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

const Home = () => {
  const [code, setCode] = useState(
    "git clone https://github.com/rol2022/reactive-starter.git"
  );

  const [copy, setCopy] = useState(false);

  const getCode = () => {
    setCopy(true);
    navigator.clipboard.writeText(code);

    setTimeout(() => {
      setCopy(false);
    }, 5000);
  };
  return (
    <main className="h-screen w-full bg-bgScreen flex items-center justify-center flex-col px-3">
      <Image
        className=" w-auto sm:w-[50%] md:w-[50%] xl:w-[40%] 2xl:w-[30%] mx-auto"
        src="/logo.png"
        alt="logo"
      />

      <h1 className=" font-sans font-semibold text-2xl md:text-4xl 2xl:text-7xl text-white">
        REACT + TAILWIND
      </h1>
      <p
        className=" font-sans font-medium text-center text-sm 2xl:text-xl
       text-white mt-2"
      >
        Starter Template of React + Tailwind & Other NPM Packages To Build Your
        Application
      </p>

      <p className=" hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        voluptates quae officia quas explicabo asperiores, maiores doloribus
        maxime, omnis facere, assumenda blanditiis rem quam et quibusdam
        officiis voluptatibus nemo? Officiis expedita, aperiam nisi ullam
        incidunt natus adipisci! Ipsam inventore quaerat ut esse possimus,
        cupiditate delectus, nulla nesciunt dolorem illo enim, fugiat rem sed
        assumenda! A, nesciunt, tenetur corporis voluptatem laboriosam minus
        nihil quibusdam qui at optio nemo. Vel sunt laborum, sed iusto hic
        laboriosam qui quod tempora tenetur recusandae vitae corrupti dolores
        maiores et veritatis. Expedita, odio incidunt. Repudiandae quibusdam
        assumenda enim maxime ea quaerat. Dolore cum aut officia odio.
      </p>

      <Flex className="my-4 p-3 items-center gap-2 bg-white/20 rounded-md relative">
        <p className=" font-sans text-xs sm:text-sm text-white">{code}</p>

        <button
          onClick={getCode}
          className="p-2 rounded-lg text-white bg-white/40 absolute top-0 right-0 sm:static"
        >
          {copy ? <FaCheck /> : <MdOutlineContentCopy />}
        </button>
      </Flex>

      <a
        href="https://github.com/rol2022/reactive-starter"
        target="_blank"
        className=" mt-2 block py-3 px-5 font-sans font-bold text-sm 2xl:text-xl text-white border-[2px] border-white/40 rounded-lg"
      >
        Get The Template
      </a>

      <p className=" font-sans font-medium text-sm 2xl:text-xl text-white mt-3">
        Check and edit <code>/src</code> folder
      </p>
    </main>
  );
};

export default Home;
