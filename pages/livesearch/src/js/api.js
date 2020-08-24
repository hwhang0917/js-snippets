const API = "https://acnhapi.com/v1/songs/";

export const getSongs = async () => {
  try {
    const response = await fetch(API);
    return response.json();
  } catch (error) {
    return error;
  }
};

export const getSong = async (id) => {
  try {
    const response = await fetch(API + id);
    return response.json();
  } catch (error) {
    return error;
  }
};
