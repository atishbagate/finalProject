import axios from "axios";

const initState = {
  popular: [],
  newGames: [],
  upcoming: []
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

//action creator
