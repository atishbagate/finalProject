const base_url = "https://api.rawg.io/api/";
//getting dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getMonth() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// note: use api keykey=798277c69c004edea18eb671bda9ebd2
const popular_games = `games?key=798277c69c004edea18eb671bda9ebd2&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const newGames = `games?key=798277c69c004edea18eb671bda9ebd2&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
const upcoming_games = `games?key=798277c69c004edea18eb671bda9ebd2&dates=${currentDate},${nextYear}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;

//gaming details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=798277c69c004edea18eb671bda9ebd2`;

//screen shoot fetching details
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=798277c69c004edea18eb671bda9ebd2`;
