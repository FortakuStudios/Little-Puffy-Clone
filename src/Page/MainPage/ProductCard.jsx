import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
function ProductCard(prop) {
  return (
    <div style={{ fontFamily: "Helvetica Neue, palatino, serif" }}>
      <Card style={{ width: "100%", border: 0 }}>
        <Card.Img variant="top" src={prop.imgSrc} />
        <Card.Body className="px-0">
          <Row>
            <Col xs={10}>
              <Card.Title style={{ fontSize: "11px" }}>
                DANI CONTRAST TANK
              </Card.Title>
            </Col>
            <Col xs={2}>
              <p style={{ fontSize: "11px" }}>$10</p>
            </Col>
          </Row>

          <Card.Text style={{ fontSize: "11px" }}>Black</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
