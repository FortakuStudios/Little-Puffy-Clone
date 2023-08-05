import { Col, Row, Container, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Footer() {
  return (
    <>
      <Container
        className="my-5"
        style={{
          fontSize: "9px",
        }}
      >
        <hr />
        <Row md={4} className="mt-5">
          <Col>
            <p className="mb-4 ">NEWSLETTER</p>
            <p>
              Sign up to our newsletter for inspiration, more behind the scenes
              & exclusive updates
            </p>
            <InputGroup className="mb-3 ">
              <Form.Control
                className="fs-6 border border-black border border-end-0 rounded-start-pill"
                placeholder="youremail@example.com"
                aria-label="youremail@example.com"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text
                style={{
                  fontSize: "11px",
                  fontFamily: "georgia, palatino, serif",
                }}
                id="basic-addon2"
                className="border border-start-0 border border-black rounded-end-pill"
              >
                Join
              </InputGroup.Text>
            </InputGroup>
          </Col>
          <Col>
            <p className="mb-4">CUSTOMER SERVICE</p>
            <p>
              <a
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                HOME
              </a>
            </p>
            <p>
              <a
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                SHIPPING
              </a>
            </p>
            <p>
              <a
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                RETURNS
              </a>
            </p>
          </Col>
          <Col>
            <p className="mb-4">LITTLE PUFFY</p>
          </Col>
          <Col>
            <p className="mb-4">KEEP IN TOUCH</p>
            <p>
              <a
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                INSTAGRAM
              </a>
            </p>
            <p>
              <a
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                YOUTUBE
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <Container
        className="mb-5"
        style={{
          fontSize: "9px",
        }}
      >
        <Row>
          <Col>
            <p>&copy; LITTLE PUFFY 2023</p>
          </Col>
          <Col sm={"auto"}></Col>
          <Col className="d-flex flex-row-reverse">
            <Stack direction="horizontal" className="mb-5" gap={3}>
              <a
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                HOME
              </a>
              <a
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                TERMS
              </a>
              <a
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                PRIVACY
              </a>
              <a
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                OPT OUT
              </a>
              <a
                className="link-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                CONTACT US
              </a>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
