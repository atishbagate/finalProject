import { React } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//import redux
import { useDispatch } from "react-redux";
//inport animation
import { popUp } from "../animation";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  //loading details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <motion.p layoutId={`p ${stringPathId}`}>{released}</motion.p>
        {/* created function to low size image fetch from server  */}
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
          key={stringPathId}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.8);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    /* object-fit: cover; */
  }
`;
export default Game;
