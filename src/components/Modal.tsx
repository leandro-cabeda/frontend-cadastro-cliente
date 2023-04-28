import { DialogProps } from "@mui/material/Dialog";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import React from "react";
import { Box, Button, Paper, styled } from "@mui/material";
import moment from "moment";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#600202" : "#c7f1d9",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const Modal = () => {
  // Modal resumo
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState<DialogProps["maxWidth"]>("lg");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            display: "inline-block",
            alignItems: "center",
            mb: 1,
            py: 1.75,
            px: 1,
            width: "100%",
          }}
        >
          <Grid item xs={12} marginBottom={10}>
            <Box>
              <Item>
                <h2>
                  <b></b>
                </h2>
              </Item>
              <Grid container spacing={3}>
                <Grid item xs>
                  <Item>
                    <b></b>
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            position: "relative",
            minWidth: 50,
          }}
          color="inherit"
          variant="outlined"
          onClick={handleClose}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
