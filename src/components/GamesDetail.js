import { React } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//import redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  const { game, screen } = useSelector((state) => state.detail);

  return (
    <>
      {game && (
        // <div className="card-shadow">
        <CardShadow>
          <Detail>
            <div className="stats">
              <div className="rating">
                <h3>{game.name}</h3>
                <h3>Rating: {game.rating}</h3>
              </div>
              <div className="info">
                <h3>Platforms</h3>

                <h3>this is platform</h3>
                <div className="platforms">
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </div>
              </div>
            </div>
            <h3>this is media</h3>
            <div className="media">
              <img src={game.background_image} alt={game.background_image} />
            </div>
            <div className="description">
              <p>{game.description_raw}</p>
            </div>
            <h3>this is gallery</h3>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt={screen.image} />
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
  padding: 2rem 20rem;
  background: lightgray;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
export default GameDetail;
