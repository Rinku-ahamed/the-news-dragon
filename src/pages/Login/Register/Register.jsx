import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [access, setAccess] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const image_url = form.imageUrl.value;
    const password = form.password.value;
    console.log(name, email, password, image_url);
    form.reset();
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Thanks for register");
        handleUpdateProfile(user, name, image_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdateProfile = (user, name, image_url) => {
    updateProfile(user, { displayName: name, photoURL: image_url })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTerms = (event) => {
    setAccess(event.target.checked);
    console.log(event.target.checked);
  };
  return (
    <div className="container pt-3">
      <Form className="w-50 mx-auto pt-5" onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUrl">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Photo Url"
            name="imageUrl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Accept Term & Conditions"
            onClick={handleTerms}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disabled={!access}
          className="w-100"
        >
          Register
        </Button>
        <Form.Text className="text-success">{success}</Form.Text>
      </Form>
    </div>
  );
};

export default Register;
