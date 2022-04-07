import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/modal";
import {
  deleteStationById,
  getStations,
} from "../../redux/asyncActions/stations";

import CreateStation from "./CreateStation";
import EditStation from "./EditStation";
import { Station } from "./station/Station";
import classes from "./style.module.scss";

export const Stations = () => {
  const { stations } = useSelector((state) => state.stationsReducer);
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenEditModal, setOpenEditModal] = useState(false);
  const [currentStation, setCurrentStation] = useState(stations[0]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStations());
  }, []);

  const onOpen = () => setOpenModal(true);
  const onClose = () => setOpenModal(false);

  const onOpenEdit = () => setOpenEditModal(true);
  const onCloseEdit = () => setOpenEditModal(false);

  const onDelete = (id) => {
    dispatch(deleteStationById(id));
  };

  const onEdit = (id) => {
    onOpenEdit();
    setCurrentStation(stations.filter((station) => station.id === id)[0]);
  };

  return (
    <div className={classes.stations}>
      {stations.length > 0
        ? stations.map((station) => (
            <Station
              {...station}
              key={station.id}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        : "stations not found"}
      {isOpenModal && (
        <Modal width={500} height={500} onClose={onClose}>
          <CreateStation onClose={onClose} />
        </Modal>
      )}
      {isOpenEditModal && (
        <Modal width={500} height={500} onClose={onCloseEdit}>
          <EditStation station={currentStation} onClose={onCloseEdit} />
        </Modal>
      )}
      <div className={classes.button__wrap}>
        <button className={classes.stations__button} onClick={onOpen}>
          create station
        </button>
      </div>
    </div>
  );
};
