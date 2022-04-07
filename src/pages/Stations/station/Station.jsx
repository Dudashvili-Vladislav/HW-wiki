import React, { useState } from "react";
import classes from "./style.module.scss";
import { parseDate } from "../../../utils/parseDate";
import pen from "../../../images/icons/pen.svg";
import remove from "../../../images/icons/remove.svg";
import Modal from "../../../components/modal";
import { Details } from "../components/details/Details";

export const Station = ({
  id,
  name,
  comment,
  created_at,
  updated_at,
  onDelete,
  onEdit,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const OpenModalCallback = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);
  return (
    <>
      {openModal && (
        <Modal onClose={closeModal}  width={500}>
          <Details name={name} comment={comment} />
        </Modal>
      )}
      <div className={classes.station}>
        <div className={classes.station__info}>
          <div
            className={[
              classes.station__info_item,
              classes.station__title,
            ].join(" ")}
            onClick={OpenModalCallback}
          >
            {name}
          </div>
          <div className={classes.station__info_item}>
            {comment.substring(0, 10) + "..." || "No commented"}
          </div>
          <div className={classes.station__info_item}>
            {parseDate(created_at)}
          </div>
          <div className={classes.station__info_item}>
            {parseDate(updated_at)}
          </div>
        </div>
        <div className={classes.station__buttons}>
          <div
            className={classes.station__buttons_item}
            onClick={() => onDelete(id)}
          >
            <img src={remove} alt="remove" />
          </div>
          <div
            className={classes.station__buttons_item}
            onClick={() => onEdit(id)}
          >
            <img src={pen} alt="edit" />
          </div>
        </div>
      </div>
    </>
  );
};
