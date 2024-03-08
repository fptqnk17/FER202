import { Card } from "react-bootstrap";
import { News } from "../data/News";

const CardComponent = (props: { news: News }) => {
  return (
    <>
      <Card style={{ width: "90%", margin: "10px", justifyContent: "center" }}>
        <Card.Img variant="top" src={props.news.image} />
        <Card.Body>
          <Card.Title>{props.news.title}</Card.Title>
          <Card.Text>{props.news.description}</Card.Text>
          <a href="#">{props.news.title}</a>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;