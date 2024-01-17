import { Row, Col, Form, Button } from "react-bootstrap";

function ReservationForm() {
  return (
    <div className="container p-5">
      <h2 className="text-center mt-3 mb-4">Book your table</h2>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formServer">
              <Form.Label>Select a Server</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Server 1</option>
                <option>Server 2</option>
                <option>Server 3</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formTextArea">
              <Form.Label>Additional Requests</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter any additional requests"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="warning" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default ReservationForm;
