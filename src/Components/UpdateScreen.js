import { Button, Card, Checkbox, Grid, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import DropDown from "./DropDown";
import { Instance } from "../Instance";

const UpdateScreen = ({ data, open, onClose, setState, update }) => {
  const arr = ["Java Developer", "React Developer", "Python Developer"];
  const updateUserDetails = async () => {
    try {
      const response = await Instance.put(`/users/` + data.id, data);
      if (response.status === 200) {
        console.log(response.data);
        update();
        onClose(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data.id);
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Card
          sx={{
            width: "40%",
            position: "absolute",
            top: "30%",
            left: "30%",
            padding: "15px",
          }}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Update Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xl={4}>
              <Typography>Name</Typography>
              <InputComponent
                value={data.name}
                onChange={(e) => setState({ ...data, name: e.target.value })}
              />
            </Grid>
            <Grid item xl={4}>
              <Typography>FatherName</Typography>
              <InputComponent
                value={data.fatherName}
                onChange={(e) =>
                  setState({ ...data, fatherName: e.target.value })
                }
              />
            </Grid>
            <Grid item xl={4}>
              <Typography>MotherName</Typography>
              <InputComponent
                value={data.motherName}
                onChange={(e) =>
                  setState({ ...data, motherName: e.target.value })
                }
              />
            </Grid>
            <Grid item xl={4}>
              <Typography>Roles</Typography>
              <DropDown
                option={arr}
                values={data.role}
                onChange={(e) => setState({ ...data, role: e.target.value })}
              />
            </Grid>
            <Grid item xl={4}>
              <Typography>IsActive</Typography>
              <Checkbox
                checked={data.isActive}
                onChange={() =>
                  setState({ ...data, isActive: data.isActive ? false : true })
                }
              />
            </Grid>
            <Grid item xl={4}>
              <Typography sx={{ padding: "10px" }} />
              <Button
                variant="contained"
                size="small"
                fullWidth
                onClick={updateUserDetails}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Modal>
    </div>
  );
};

export default UpdateScreen;
