import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";

const Contact = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Form className="mt-3">
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control type="firstname" placeholder="Enter email" />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="lastname" placeholder="Last name" />
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>City</Form.Label>
                <Form.Control type="city" placeholder="City" />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>State</Form.Label>
                <Form.Control type="state" placeholder="State" />
              </Form.Group>
            </Col>
            <Col lg={3}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="zip" placeholder="Zip" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Agree to terms and conditions"
                />
              </Form.Group>
            </Col>
            <Col lg={12} className="mt-3">
              <Button variant="primary">Submit form</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Contact;
