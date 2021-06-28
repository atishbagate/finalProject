import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";

//components
import Game from "../components/Games";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //get data back
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <Gamelist>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            relesed={game.relesed}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </Gamelist>
  );
};

const Gamelist = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-width: height 60vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 2rem;
`;
export default Home;
