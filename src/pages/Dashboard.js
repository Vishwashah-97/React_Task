import React, { useState } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../redux/actions";

function Dashboard(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const handleClose = () => {
    setShow(false);
    setId();
  };
  const handleShow = (row) => {
    setShow(true);
    setId(row.id);
  };
  const handleDelete = (row) => {
    dispatch(deleteData(row.name));
  };
  const cellButton = (cell, row, enumObject, rowIndex) => {
    return (
      <>
        <Button onClick={() => history.push("/Update", { data: row })}>
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleDelete(row);
          }}
        >
          Delete
        </Button>
      </>
    );
  };
  return (
    <div>
      <Button onClick={() => history.push("/add-user")}>Add</Button>
      <BootstrapTable data={users}>
        <TableHeaderColumn dataField="email" isKey>
          Email
        </TableHeaderColumn>
        <TableHeaderColumn dataField="name"> Name</TableHeaderColumn>
        <TableHeaderColumn dataField="age">age</TableHeaderColumn>
        <TableHeaderColumn dataField="contact_no">Number</TableHeaderColumn>
        <TableHeaderColumn dataField="Action" dataFormat={cellButton}>
          Actions
        </TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
}

export default Dashboard;
