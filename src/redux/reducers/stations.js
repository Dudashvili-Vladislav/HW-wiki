const defaultState = {
  stations: [],
};

const GET_STATIONS = "GET_STATIONS";
const CREATE_STATION = "CREATE_STATION";
const DELETE_STATION = "DELETE_STATION";
const UPDATE_STATION = "UPDATE_STATION";

export const stationsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_STATIONS:
      return { ...state, stations: action.payload };
    case CREATE_STATION:
      return { ...state, stations: [...state.stations, action.payload] };
    case DELETE_STATION:
      return {
        ...state,
        stations: state.stations.filter(
          (element) => element.id !== action.payload.id
        ),
      };
    case UPDATE_STATION:
      return {
        ...state,
        stations: [
          ...state.stations.filter(
            (element) => element.id !== action.payload.id
          ),
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export const setStationsAction = (payload) => ({ type: GET_STATIONS, payload });
export const deleteStation = (payload) => ({ type: DELETE_STATION, payload });
export const addStation = (payload) => ({ type: CREATE_STATION, payload });
export const updateStationAction = (payload) => ({ type: UPDATE_STATION, payload });
