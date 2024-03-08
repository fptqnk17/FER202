import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().oneOf([true], "You must agree before submitting."),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <NavbarComponent />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  {...register("firstName")}
                  className={
                    errors.firstName
                      ? "is-invalid"
                      : touchedFields.firstName
                      ? "is-valid"
                      : ""
                  }
                />
                {errors.firstName && (
                  <div className="invalid-feedback">This field is required</div>
                )}
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  {...register("lastName")}
                  className={
                    errors.lastName
                      ? "is-invalid"
                      : touchedFields.lastName
                      ? "is-valid"
                      : ""
                  }
                />
                {errors.lastName && (
                  <div className="invalid-feedback">This field is required</div>
                )}
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                  className={
                    errors.username
                      ? "is-invalid"
                      : touchedFields.username
                      ? "is-valid"
                      : ""
                  }
                />
                {errors.username && (
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  {...register("city")}
                  className={
                    errors.city
                      ? "is-invalid"
                      : touchedFields.city
                      ? "is-valid"
                      : ""
                  }
                />
                {errors.city && (
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                )}
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="State"
                  {...register("state")}
                  className={
                    errors.state
                      ? "is-invalid"
                      : touchedFields.state
                      ? "is-valid"
                      : ""
                  }
                />
                {errors.state && (
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                )}
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  {...register("zip")}
                  className={
                    errors.zip
                      ? "is-invalid"
                      : touchedFields.zip
                      ? "is-valid"
                      : ""
                  }
                />
                {errors.zip && (
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Agree to terms and conditions"
                  {...register("terms")}
                  className={
                    errors.terms
                      ? "is-invalid"
                      : touchedFields.terms
                      ? "is-valid"
                      : ""
                  }
                />
                {errors.terms && (
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                )}
              </Form.Group>
            </Col>
            <Col lg={12} className="mt-3">
              <Button variant="primary" type="submit">
                Submit form
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
