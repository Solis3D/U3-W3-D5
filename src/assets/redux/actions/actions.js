export const GET_SONGS = "GET_SONGS";
export const GET_SONGS_ERROR = "GET_SONGS_ERROR";
export const GET_SONGS_LOADING = "GET_SONGS_LOADING";

const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

// Special Actions
export const getSongsAction = function (query, limit = 10) {
  return function (dispatch, getState) {
    console.log(getState());

    dispatch({ type: GET_SONGS_LOADING, payload: true });
    dispatch({ type: GET_SONGS_ERROR, payload: null });

    fetch(endpoint + query + "&limit=2")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel recupero delle canzoni");
        }
      })
      .then((data) => {
        dispatch({
          type: GET_SONGS,
          payload: data.data.slice(0, limit),
        });

        dispatch({ type: GET_SONGS_LOADING, payload: false });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: GET_SONGS_ERROR,
          payload: err.message,
        });

        dispatch({
          type: GET_SONGS_LOADING,
          payload: false,
        });
      });
  };
};
