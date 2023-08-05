import { Row, Col, Container } from "react-bootstrap";

function TextPart(prop) {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column align-items-center my-5"
        style={{ fontFamily: "georgia, palatino, serif" }}
      >
        <div>
          <p>{prop.head}</p>
        </div>
        <div className="my-5">
          <Row xs={1} md={3}>
            <Col xs lg="4"></Col>
            <Col md={prop.len}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 14 }}>{prop.body}</p>
              </div>
            </Col>
            <Col xs lg="4"></Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default TextPart;
