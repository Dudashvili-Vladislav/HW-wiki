import React from "react";
import ReactDOM from "react-dom";
import classes from "./style.module.scss";
import cross from '../../images/icons/cross.svg'

export const Modal = ({ children, width, height, onClose }) => {
  return ReactDOM.createPortal(
    <div className={classes.modal__wrap}>
      <div className={classes.modal} style={{ width, height }}>
        <img src={cross} alt="close" className={classes.close} onClick={onClose}></img>
        <div>{children}</div>
      </div>
      <div className={classes.modal__overlay}></div>
    </div>,
    document.getElementById("modal")
  );
};
