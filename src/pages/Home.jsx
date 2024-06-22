import React from "react";
import Image from "../components/common/Image";

const Home = () => {
  return (
    <main className="h-[90vh] w-full bg-bgScreen flex items-center justify-center flex-col">
      <Image
        className=" w-auto sm:w-[50%] md:w-auto mx-auto"
        src="/logo.png"
        alt="logo"
      />

      <h1 className=" font-sans font-semibold text-2xl md:text-4xl xl:text-7xl text-white">
        REACT + TAILWIND
      </h1>

      <a
        href="https://github.com/rol2022/reactive-starter"
        target="_blank"
        className=" mt-5 block py-3 px-5 font-sans font-bold text-xl text-white border-[2px] border-white/40 rounded-lg"
      >
        Get The Temlplate
      </a>

      <p className=" font-sans font-medium text-xl text-white mt-10">
        Check and edit <code>/src</code> folder
      </p>
    </main>
  );
};

export default Home;
