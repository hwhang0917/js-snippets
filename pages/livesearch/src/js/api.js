const API = "https://acnhapi.com/v1/songs/";

export const getSongs = async () => {
  const response = await fetch(API);
  if (response.ok) {
    // Successful Response
    const data = await response.json();
    return data;
  } else {
    // Failed Response
    return response;
  }
};
