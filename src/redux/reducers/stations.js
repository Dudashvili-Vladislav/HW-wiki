const defaultState = {
    stations: [],
  };
  
  const GET_STATIONS = "GET_STATIONS";
  const CREATE_STATION = "CREATE_STATION"
  
  export const stationsReducer = (state = defaultState, action) => {
    switch (action.type) {
      case GET_STATIONS:
        return { ...state, stations: action.payload};
    case CREATE_STATION:
        return {...state, stations: [...state.stations, action.payload]}
      default:
        return state;
    }
  };
  
  export const getStationsAction = (payload) => ({ type: GET_STATIONS, payload });