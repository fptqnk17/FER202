import { Container, Row, Col } from "react-bootstrap";

const MenuComponent = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/imgs/menus/menu-01.jpg"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/imgs/menus/menu-02.jpg"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/imgs/menus/menu-03.jpg"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/imgs/menus/menu-04.jpg"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/imgs/menus/menu-05.jpg"
              style={{ borderRadius: "50%" }}
            />
          </Col>
          <Col lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/imgs/menus/menu-06.jpg"
              style={{ borderRadius: "50%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MenuComponent;
