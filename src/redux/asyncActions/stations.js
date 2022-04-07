import stations from "../../api/service/stations";
import { getStationsAction, deleteStationAction, createStationAction } from "../reducers/stations";

export const getStations = () => {
  return async function (dispatch) {
    const fetchedStations = await stations.getStations();
    dispatch(getStationsAction(fetchedStations.data));
  };
};

export const сreateStation = (name, comment) => {
  return async function (dispatch) {
    const createStation = await stations.createStation(name, comment);
    dispatch(createStationAction(createStation))
    console.log("createStation", createStation);
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
    dispatch(deleteStationAction(deletedStation));
  };
};

export const FetchUpdateStatuonsById = (id, name, comment) => {
  return async function (dispatch) {
    const deleteStationsById = await stations.deleteStationsById(
      id,
      name,
      comment
    );
    console.log("deleteStationsById", deleteStationsById);
  };
};
