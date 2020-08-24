// Time constant
const WEEK_IN_MS = 604800000;

// Get current date in format: YYYY-MM-DD
export const getCurrentDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

// Check if given time has passed week
export const passWeek = (timeStr) => {
  const storedTime = Date.parse(timeStr);
  const currentTime = Date.now();

  if (storedTime + WEEK_IN_MS < currentTime) {
    return true;
  } else {
    return false;
  }
};
