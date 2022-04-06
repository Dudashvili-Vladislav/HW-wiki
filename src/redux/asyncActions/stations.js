import stations from "../../api/service/stations";
import { setStationsAction, deleteStation } from "../reducers/stations";

export const getStations = () => {
  return async function (dispatch) {
    const fetchedStations = await stations.getStations();

    dispatch(setStationsAction(fetchedStations.data));
  };
};

export const FetchCreateStations = (name, comment) => {
  return async function (dispatch) {
    const createStations = await stations.createStations(name, comment);
    console.log("createStations", createStations);
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
    dispatch(deleteStation(deletedStation));
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
