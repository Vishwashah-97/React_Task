import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
// import { login } from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();
  //state
  const [email, setEmail] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
    } else {
      let params = {
        email: email,
        password: password,
      };

      if (email == "admin" && password == "admin") {
        localStorage.setItem("isLogin", true);
        history.push("/Dashboard");
      } else {
        alert("Wrong UserName or Password !!");
      }
    }
  };

  return (
    <div className="center_form">
      <Card style={{ width: "50rem" }} className="card-center">
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
              <Form.Control.Feedback type="invalid">
                Please enter Email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                value={password}
              />
              <Form.Control.Feedback type="invalid">
                Please enter password
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
