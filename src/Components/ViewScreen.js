import React, { useEffect, useState } from "react";
import { Instance } from "../Instance";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CreateScreen from "./CreateScreen";
import UpdateScreen from "./UpdateScreen";

const ViewScreen = () => {
  const [userData, setUserData] = useState([]);
  const [create, setCreate] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState({});
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const [selectedValues, setSelectedValues] = useState({});
  const fetchAllData = async () => {
    try {
      const response = await Instance.get(`/users`);
      if (response.status === 200) {
        setUserData(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAllData();
  }, []);
  const selectedUser = async (data) => {
    // setSelectedEdit(data);
    setOpen(true);

    // const selectedIdUserDetails = async () => {
    try {
      const response = await Instance.get(`/users/` + data.id);
      if (response.status === 200) {
        setSelectedValues(response.data);
      }
    } catch (err) {
      console.log(err);
    }
    // };
  };
  const deleteSelectedUser = async (id) => {
    // const dlt = userData.filter((e, i) => e.id !== id);
    // setUserData(dlt);
    try {
      const response = await Instance.delete(`/users/` + id);
      if (response.status === 200) {
        console.log("deleted Successfully");
        fetchAllData();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      {create ? (
        <>
          <Button
            variant="contained"
            onClick={() => {
              setCreate(false);
              fetchAllData();
            }}
          >
            Back
          </Button>
          <CreateScreen reload={fetchAllData} />
        </>
      ) : (
        <>
          <Button
            variant="contained"
            sx={{ float: "right" }}
            onClick={() => setCreate(true)}
          >
            Add +
          </Button>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "700", textAlign: "center" }}>
                    Id
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700", textAlign: "center" }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700", textAlign: "center" }}>
                    FatherName
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700", textAlign: "center" }}>
                    MotherName
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700", textAlign: "center" }}>
                    IsActive
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700", textAlign: "center" }}>
                    Role
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700", textAlign: "center" }}>
                    Update
                  </TableCell>
                  <TableCell sx={{ fontWeight: "700", textAlign: "center" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((e, i) => (
                  <TableRow>
                    <TableCell sx={{ textAlign: "center" }}>{e.id}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{e.name}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {e.fatherName}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {e.motherName}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {e.isActive.toString()}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{e.role}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => selectedUser(e)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => deleteSelectedUser(e.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      <UpdateScreen
        update={fetchAllData}
        data={selectedValues}
        setState={setSelectedValues}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default ViewScreen;
