import { Button, Card, Checkbox, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import DropDown from "./DropDown";
import { Instance } from "../Instance";

const CreateScreen = ({ reload }) => {
  const arr = ["Java Developer", "React Developer", "Python Developer"];
  const [creatUser, setCreateUser] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    isActive: false,
    role: "",
  });
  const handlePostUsers = async () => {
    try {
      const response = await Instance.post(`users`, creatUser);
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Create Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xl={4}>
          <Typography>Name</Typography>
          <InputComponent
            value={creatUser.name}
            onChange={(e) =>
              setCreateUser({ ...creatUser, name: e.target.value })
            }
          />
        </Grid>
        <Grid item xl={4}>
          <Typography>FatherName</Typography>
          <InputComponent
            value={creatUser.fatherName}
            onChange={(e) =>
              setCreateUser({ ...creatUser, fatherName: e.target.value })
            }
          />
        </Grid>
        <Grid item xl={4}>
          <Typography>MotherName</Typography>
          <InputComponent
            value={creatUser.motherName}
            onChange={(e) =>
              setCreateUser({ ...creatUser, motherName: e.target.value })
            }
          />
        </Grid>
        <Grid item xl={4}>
          <Typography>IsActive</Typography>
          <Checkbox
            checked={creatUser.isActive}
            onChange={() =>
              setCreateUser({
                ...creatUser,
                isActive: creatUser.isActive ? false : true,
              })
            }
          />
        </Grid>
        <Grid item xl={4}>
          <Typography>Role</Typography>
          <DropDown
            values={creatUser.role}
            option={arr}
            onChange={(e) =>
              setCreateUser({ ...creatUser, role: e.target.value })
            }
          />
        </Grid>
        <Grid item xl={4}>
          <Typography sx={{ padding: "13px" }} />
          <Button fullWidth variant="contained" onClick={handlePostUsers}>
            Update
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateScreen;
