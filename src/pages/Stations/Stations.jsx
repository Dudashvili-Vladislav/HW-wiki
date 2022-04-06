import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStationById,
  getStations,
} from "../../redux/asyncActions/stations";
import { Station } from "./station/Station";
import classes from "./style.module.scss";

export const Stations = () => {
  const { stations } = useSelector((state) => state.stationsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStations());
  }, []);

  const onDelete = (id) => {
    //...you logic
  };

  const onEdit = (id) => {
    //...you logic
  };

  return (
    <div className={classes.stations}>
      {stations &&
        stations.map((station) => (
          <Station
            {...station}
            key={station.id}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
        
    </div>
  );
};
