import { Image, Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function AppBar() {
  return (
    <>
      <Navbar expand={false} className="fixed-top mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <i className="bi bi-person"></i>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Stack direction="horizontal">
                  <Nav.Link className="ms-auto" href="#action1">
                    Home
                  </Nav.Link>
                  <Nav.Link className="ms-auto" href="#action2">
                    Shop
                  </Nav.Link>
                  <Nav.Link className="ms-auto" href="#action2">
                    Instagram
                  </Nav.Link>
                </Stack>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#">
            <Container>
              <Image style={{ height: 18 }} src="src\assets\Logo.svg" />
            </Container>
          </Navbar.Brand>
          <i className="bi bi-cart3"></i>
        </Container>
      </Navbar>
    </>
  );
}

export default AppBar;
