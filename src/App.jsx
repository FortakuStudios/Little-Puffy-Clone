import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./Components/AppBar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "./Page/MainPage/ProductCard";
import { Button } from "react-bootstrap";
import TextPart from "./Page/MainPage/TextPart";
import Footer from "./Page/Footer";

function App() {
  const data1 = {
    images: [
      "https://picsum.photos/275/413",
      "https://picsum.photos/275/413",
      "https://picsum.photos/275/413",
      "https://picsum.photos/275/413",
    ],
  };
  return (
    <>
      <div style={{ backgroundColor: "#f3f0ec" }} className="vh-100">
        <AppBar />
        <Image
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          style={{ width: "100%" }}
        />

        <TextPart
          head="NEW COLLECTION"
          body='Introducing our latest collection, "Postcards from
                Paris," showcasing members of our beloved French Little
                Puffy Club. Where minimalism meets the perfect European summer.
                Inspired by the timeless elegance of simplicity and
                sophistication with a harmonious blend of clean lines, subtle
                details, and a touch of je ne sais quoi.'
        />
        <Container>
          <div className="my-5">
            <Row xs={2} md={4}>
              {data1.images.map((imgSrc, index) => (
                <Col key={index}>
                  <ProductCard imgSrc={imgSrc} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>

        <Container className="d-flex flex-column align-items-center mb-5">
          <div>
            <Button
              variant="secondary"
              className="px-5 py-3"
              style={{ borderRadius: "25px", fontSize: "9px" }}
            >
              SHOP THE FULL COLLECTION
            </Button>
          </div>
        </Container>

        <Image
          src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          style={{ width: "100%" }}
        />

        <TextPart
          head="SHOP TOPS"
          body="Discover our LP designed collection of new Summer tops"
          len="auto"
        />

        <Container>
          <div className="my-5">
            <Row xs={2} md={4}>
              {data1.images.map((imgSrc, index) => (
                <Col key={index}>
                  <ProductCard imgSrc={imgSrc} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>

        <Image
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          style={{ width: "100%" }}
        />

        <TextPart
          head="SUMMER DRESSES"
          body="Discover the perfect harmony between style and versatility as you explore our collection, and let our dresses become your go-to pieces that seamlessly blend into your wardrobe."
        />

        <Container>
          <div className="my-5">
            <Row md={2}>
              {data1.images.map((imgSrc, index) => (
                <Col key={index}>
                  <ProductCard imgSrc={imgSrc} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>

        <Image
          src="https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80"
          style={{ width: "100%" }}
        />

        <TextPart
          head="CLASSIC GRAPHIC T-SHIRT COLLECTION"
          body="Revisit our LP T-Shirt collection;
        where past favorites become present-day essentials."
          len="auto"
        />

        <Container>
          <div className="my-5 ">
            <Row xs={2} md={3}>
              {data1.images.slice(0, 3).map((imgSrc, index) => (
                <Col key={index}>
                  <ProductCard imgSrc={imgSrc} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
