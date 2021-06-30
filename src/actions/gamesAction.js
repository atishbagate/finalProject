import axios from "axios";

import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL
} from "../api";

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

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results
    }
  });
};
