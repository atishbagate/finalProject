import React, { useState } from "react";
//animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.png";
//redux and routers
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
//animation
import { fadeIn } from "../animation";

const Navigation = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const inputHandle = (e) => {
    setText(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(text));
    setText("");
  };
  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="images" />
        <h1>Games</h1>
      </Logo>
      <form className="search">
        <input value={text} onChange={inputHandle} type="text" />
        <button onClick={submitSearch} type="submit">
          Search Games
        </button>
      </form>
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
