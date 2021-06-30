import React from "react";
//animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.png";

const Navigation = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="images" />
        <h1>Games</h1>
      </Logo>
      <div>
        <input type="text" />
        <button>Search Games</button>
      </div>
    </StyledNav>
  );
};
const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.8rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: lightgray;
    color: black;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
export default Navigation;
