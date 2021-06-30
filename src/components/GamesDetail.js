import { React } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//import redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

const GameDetail = () => {
  const { game, screen } = useSelector((state) => state.detail);
  const history = useHistory();
  const exitHandler = (e) => {
    const element = e.target;
    console.log(element);
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  return (
    <>
      {game && (
        <CardShadow className="shadow" onClick={exitHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <h3>Rating: {game.rating}</h3>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}.</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>

            <Media>
              <img
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <>
                  <img
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
