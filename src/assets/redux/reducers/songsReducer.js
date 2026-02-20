import { GET_SONGS, GET_SONGS_ERROR, GET_SONGS_LOADING } from "../actions/actions";

const initialState = {
  songs: [],
  isLoading: false,
  error: null,
};

const songsReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...currentState,
        songs: action.payload,
      };

    case GET_SONGS_LOADING:
      return {
        ...currentState,
        isLoading: action.payload,
      };

    case GET_SONGS_ERROR:
      return {
        ...currentState,
        error: action.payload,
      };

    default:
      return currentState;
  }
};

export default songsReducer;
