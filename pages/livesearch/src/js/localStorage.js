import { passWeek } from "./utils";
// Time constant
const WEEK_IN_MS = 604800000;

// Local Storage Keys
const SONGS_LS = "songs",
  LAST_SCRAPE_LS = "lastscrape";

//   Check if client should scrape again
export const shouldScrapeAgain = () => {
  const loadedSongs = localStorage.getItem(SONGS_LS);
  const loadedStoredTime = localStorage.getItem(LAST_SCRAPE_LS);

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
