import stations from "../../api/service/stations";
import {
  setStationsAction,
  deleteStation,
  addStation,
  updateStationAction,
} from "../reducers/stations";

export const getStations = () => {
  return async function (dispatch) {
    const fetchedStations = await stations.getStations();

    dispatch(setStationsAction(fetchedStations.data));
  };
};

export const createStation = (station) => {
  return async function (dispatch) {
    const createdStation = await stations.createStations(station);
    dispatch(addStation(createdStation.data));
  };
};

export const FetchGetStationsById = (id) => {
  return async function (dispatch) {
    const getStationsById = await stations.getStationsById(id);
    console.log("getStationsById", getStationsById);
  };
};

export const deleteStationById = (id) => {
  return async function (dispatch) {
    const deletedStation = await stations.deleteStationById(id);
    dispatch(deleteStation(deletedStation.data));
  };
};

export const updateStation = (station) => {
  return async function (dispatch) {
    const updated = await stations.updateStation(station);
    dispatch(updateStationAction(updated.data));
  };
};
