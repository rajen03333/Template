import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../../../_actions";
import CloseIcon from "@material-ui/icons/Close";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "0",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CommonModal = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.alert.isModalOpen);

  return (
    <Modal
      open={isModalOpen}
      onClose={() => {
        dispatch(alertActions.modal());
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <div className="close-icon">
          <CloseIcon
            onClick={() => {
              dispatch(alertActions.modal());
            }}
          />
        </div>

        {props.children}
      </div>
    </Modal>
  );
};

export default CommonModal;
