import axios from "axios";

import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//action
export const loadGames = () => async (dispatch) => {
  //GET DATA FROM url LINK AND SAVED TO CONST VARIABLES
  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      // SEND TO STORE FOR UPDATE VALUE
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results
    }
  });
};
