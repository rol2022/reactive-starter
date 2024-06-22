import React from "react";
import Container from "../common/Container";
import { FaHeart } from "react-icons/fa";
import Flex from "../common/Flex";

const Footer = () => {
  return (
    <footer className=" bg-bgScreen py-2 fixed bottom-0 left-0 w-full">
      <Container>
        <Flex className="items-center justify-between flex-col gap-2 md:flex-row">
          <h2 className="  font-sans font-semibold text-base text-white text-center">
            2024 | Team Republic of Legends
          </h2>

          <a
            className="font-sans font-semibold text-base text-white text-center"
            href="https://republic-of-legends.netlify.app/"
          >
            www.republic-of-legends.netlify.app
          </a>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
