import { React } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//import redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  const { game, screen } = useSelector((state) => state.detail);

  return (
    <div className="card-shadow">
      {game && (
        <div className="detail">
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
            <img src={game.background_image} alt="images" />
          </div>
          <div className="description">
            <p>{game.description_raw}</p>
          </div>
          <h3>this is gallery</h3>
          <div className="gallery">
            {screen.results.map((screen) => (
              <img src={screen.image} key={screen.id} alt="scw" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: (0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;
export default GameDetail;
