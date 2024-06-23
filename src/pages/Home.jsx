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
    <main className="h-[90vh] w-full bg-bgScreen flex items-center justify-center flex-col">
      <Image
        className=" w-auto sm:w-[50%] md:w-[30%] 2xl:w-auto mx-auto"
        src="/logo.png"
        alt="logo"
      />

      <h1 className=" font-sans font-semibold text-2xl md:text-4xl 2xl:text-7xl text-white">
        REACT + TAILWIND
      </h1>
      <p
        className=" font-sans font-medium text-sm 2xl:text-xl
       text-white mt-2"
      >
        Starter Template of React + Tailwind & Other NPM Packages To Build Your
        Application
      </p>

      <Flex className="my-4 p-3 items-center gap-2 bg-white/20 rounded-md">
        <p className=" font-sans text-sm text-white">{code}</p>

        <button
          onClick={getCode}
          className="p-2 rounded-lg text-white bg-white/40"
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
