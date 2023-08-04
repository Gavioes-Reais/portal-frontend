import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

function LogoutDialog({ open, onClose, onLogout }) {

  const handleClose = () => {
    onClose();
  };

  const handleLogout = () => {
    onLogout();
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Logout</DialogTitle>
      <DialogContent>
        <DialogContentText>Tem certeza de que deseja sair?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="warning" variant="outlined">
          Cancelar
        </Button>
        <Button onClick={handleLogout} color="warning" variant="contained">
          Sair
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LogoutDialog;