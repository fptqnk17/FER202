import { Row, Col, Container } from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import NavbarComponent from "../components/NavbarComponent";
import newLists, { News } from "../data/News";

const News = () => {
  return (
    <>
      <NavbarComponent />
      <Container fluid>
        <h1 style={{ color: "red" }}>News Category</h1>

        <Row>
          {newLists.map((news: News, index: number) => {
            return (
              <Col key={index} xs={12} md={4} lg={3}>
                <CardComponent news={news} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default News;
