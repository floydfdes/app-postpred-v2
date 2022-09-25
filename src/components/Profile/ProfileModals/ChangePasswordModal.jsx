import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { resetPassword } from "../../../actions/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const ChangePasswordModal = ({ open, setOpen, userDetails }) => {
  const initialErrorState = {
    oldPass: "",
    newPass: "",
    cNewPass: "",
  };

  const [formData, setFormData] = useState(initialErrorState);
  const [errors, setErrors] = useState(initialErrorState);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = (action) => {
    debugger;
    if (action) {
      const isValid = validatedFields(formData);
      if (!isValid) return;
      const { newPass } = formData;

      dispatch(
        resetPassword(userDetails._id, { newPassword: newPass }, history)
      );
    }
    setOpen(false);
  };
  const onUserDetailChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatedFields = (formData) => {
    let isValid = true;
    setErrors(initialErrorState);

    for (let entry in formData) {
      if (!formData[entry]) {
        setErrors((prevState) => ({
          ...prevState,
          [entry]: `${entry} is required`,
        }));
        isValid = false;
      }
    }

    if (formData.oldPass && formData.oldPass === formData.newPass) {
      setErrors((prevState) => ({
        ...prevState,
        newPass: `New password cannot be same as old password`,
      }));
      isValid = false;
    }
    if (formData.newPass && formData.cNewPass !== formData.newPass) {
      setErrors((prevState) => ({
        ...prevState,
        cNewPass: `Please enter proper confirmation password`,
      }));
      isValid = false;
    }

    return isValid;
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide your new password.
          </DialogContentText>
          <TextField
            margin="dense"
            id="oldPass"
            name="oldPass"
            label="Current Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={onUserDetailChange}
          />
          <span class="profile-model-errors">{errors?.oldPass}</span>
          <TextField
            margin="dense"
            id="newPass"
            name="newPass"
            label="New Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={onUserDetailChange}
          />
          <span class="profile-model-errors">{errors?.newPass}</span>
          <TextField
            margin="dense"
            id="cNewPass"
            name="cNewPass"
            label="Confirm New Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={onUserDetailChange}
          />
          <span class="profile-model-errors">{errors?.cNewPass}</span>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Change Password</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChangePasswordModal;
