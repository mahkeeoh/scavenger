import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Prompt } from "../routes/prompts";

export default function PromptCard({ prompt }: { prompt: Prompt }) {
  const { cardTitle, cardSubtitle } = prompt;
  return (
    <Card>
      <Container className="p-1">
        <Row>
          <Col xs={3} className="d-flex align-items-center">
            <Image
              src="/firstImage.jpg"
              alt="/firstImage.jpg"
              style={{
                objectFit: "cover",
                aspectRatio: "1 / 1",
                borderRadius: "20px",
              }}
              fluid
            ></Image>
          </Col>
          <Col xs={7} className="d-flex align-items-center">
            <Row>
              <Card.Title>{cardTitle}</Card.Title>
              <Card.Subtitle>{cardSubtitle}</Card.Subtitle>
            </Row>
          </Col>
          <Col xs={2} className="d-flex align-items-center">
            <Card
              style={{ backgroundColor: "lightGrey", width: "100%" }}
              className="d-flex align-items-center"
            >
              <h1 className="m-0" style={{ color: "white" }}>
                2
              </h1>
            </Card>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
