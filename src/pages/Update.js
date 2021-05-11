import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateData } from "../redux/actions";

function Update(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = props.location.state.data;

  const [name, setName] = useState(userInfo.name);
  const [phone, setPhone] = useState(userInfo.contact_no);
  const [age, setAge] = useState(userInfo.age);
  const [email, setEmail] = useState(userInfo.email);

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
      dispatch(updateData(params));
      history.push("/Dashboard");
    }
  };
  console.log(props.location);
  return (
    <div className="center_form">
      <h1 style={{ textAlign: "center" }}>Update</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className={flag ? "error" : ""}
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={getName}
            disabled
          />
          {flag && <p>Please Enter name</p>}
        </Form.Group>
        <Form.Group controlId="ControlTextarea1">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={getEmail}
          />
        </Form.Group>
        <Form.Group controlId="ControlTextarea1">
          <Form.Label>Age </Form.Label>
          <Form.Control
            type="text"
            placeholder="Age"
            onChange={getAge}
            value={age}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contact No: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Contact no"
            value={phone}
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

export default Update;
