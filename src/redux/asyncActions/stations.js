import stations from "../../api/service/stations"
import getStationsAction from "../reducers/stations"



export const FetchGetStations = () => {
    return async function(dispatch) {
      const getStations = await stations.getStations();
      console.log("getStations",getStations)
        dispatch(getStationsAction(getStations))
    }
  }

  export const FetchCreateStations = (name, comment) => {
    return async function(dispatch) {
      const createStations = await stations.createStations(name,comment);
      console.log("createStations",createStations)
    }
  }

  export const FetchGetStationsById = (id) => {
      return async function(dispatch) {
          const getStationsById = await stations.getStationsById(id);
          console.log("getStationsById",getStationsById)
      }
  }

  export const FetchDeleteStationsById = (id) => {
      return async function(dispatch) {
          const deleteStationsById = await stations.deleteStationsById(id);
          console.log("deleteStationsById",deleteStationsById)
      }
  }

  export const FetchUpdateStatuonsById = (id,name,comment) => {
      return async function(dispatch) {
          const deleteStationsById = await stations.deleteStationsById(id,name,comment);
          console.log("deleteStationsById",deleteStationsById)
      }
  }
  