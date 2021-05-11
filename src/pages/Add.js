import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveData } from "../redux/actions";

function Add(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState(0);
  const [phone, setPhone] = useState(0);
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [flag, setFlag] = useState(false);
  const getName = (e) => {
    setName(e.target.value);
    setFlag(false);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getAge = (e) => {
    setAge(e.target.value);
  };
  const getPhone = (e) => {
    setPhone(e.target.value);
    setFlag(false);
  };
  const submitButton = (e) => {
    e.preventDefault();
    if (name === 0) {
      setFlag(true);
    } else {
      let params = {
        name: name,
        email: email,
        age: age,
        contact_no: phone,
      };
      dispatch(saveData(params));
      history.push("/Dashboard");
    }
  };
  return (
    <div className="center_form">
      <h1 style={{ textAlign: "center" }}>Insert Data</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className={flag ? "error" : ""}
            type="text"
            placeholder="Enter Name"
            onChange={getName}
          />
          {flag && <p>Please Enter name</p>}
        </Form.Group>
        <Form.Group controlId="ControlTextarea1">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={getEmail}
          />
        </Form.Group>
        <Form.Group controlId="ControlTextarea1">
          <Form.Label>Age </Form.Label>
          <Form.Control type="text" placeholder="Age" onChange={getAge} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contact No: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Contact no"
            onChange={getPhone}
          />
        </Form.Group>

        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit" onClick={submitButton}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Add;
