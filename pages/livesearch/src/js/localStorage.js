import { passWeek, getCurrentDate } from "./utils";

/*
  Check browser local storage for data, only fetch again if data is more than a week old
*/

// Local Storage Keys
const SONGS_LS = "songs",
  DATA_GET_TIME = "data_get_time";

export const saveSongsInLocalStorage = (songs) => {
  localStorage.setItem(SONGS_LS, JSON.stringify(songs));
  localStorage.setItem(DATA_GET_TIME, getCurrentDate());
};

export const getSongsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(SONGS_LS));
};

//   Check if client should fetch data
export const shouldFetch = () => {
  const loadedSongs = localStorage.getItem(SONGS_LS);
  const loadedStoredTime = localStorage.getItem(DATA_GET_TIME);

  // Empty local storage
  if (loadedSongs === null || loadedStoredTime === null) {
    return true;
  } else {
    // Scrape data expired week
    if (passWeek(loadedStoredTime)) {
      return true;
    } else {
      return false;
    }
  }
};
