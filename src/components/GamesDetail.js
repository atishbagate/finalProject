import { React } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//import redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
//imgs
import apple from "../img/apple.png";
import steam from "../img/steam.png";
import xboz from "../img/xboz.png";
import nintendo from "../img/nintendo.png";
import playstation from "../img/playstation.png";
import joy from "../img/joy.png";
//starts
import starfull from "../img/starfull.png";
import starzero from "../img/starzero.png";

const GameDetail = ({ pathId }) => {
  const { game, screen } = useSelector((state) => state.detail);
  const history = useHistory();
  const exitHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  //function for calling img
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xboz;
      case "PC":
        return steam;
      case "iOS":
        return apple;
      case "nintendo":
        return nintendo;
      default:
        return joy;
    }
  };
  // star logic
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starfull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starzero}></img>);
      }
    }
    return stars;
  };

  return (
    <>
      {game && (
        <CardShadow className="shadow" onClick={exitHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <motion.h3 layoutId={`h3 ${pathId}`}>
                  Rating: {game.rating}
                </motion.h3>
                {getStars()}
              </div>
              <Info>
                <motion.h3 layoutId={`h3 ${pathId}`}>Platforms</motion.h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>

            <Media>
              <motion.img
                layoutId={`img ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <motion.p layoutId={`p ${pathId}`}>
                {game.description_raw}
              </motion.p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <>
                  <motion.img
                    layoutId={`img ${pathId}`}
                    src={smallImage(screen.image, 1280)}
                    key={screen.id}
                    alt={screen.image}
                  />
                  <Line className="line"></Line>
                </>
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: (0, 0, 0, 0.2);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightblue;
    border: 1px solid red;
  }
  &::-webkit-scrollbar-track {
    background-color: lightgray;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 7rem;
  background: lightgray;
  position: absolute;
  z-index: 10;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    display: inline;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
const Line = styled(motion.div)`
  height: 0.5rem;
  background: #23d997;
  margin-bottom: 3rem;
`;
export default GameDetail;
