import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useNavigate } from "react-router";

export default function Login() {
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const trimmed = textValue.trim().replaceAll(" ", "");
    navigate(`/${trimmed}/prompts`); // Navigate to the dynamic route
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container className="position-absolute bottom-0 p-4">
        <Row sm="4" className="mb-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Player Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter text"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
          </Form.Group>
          <Button disabled={textValue.length < 1} type="submit">
            Submit
          </Button>
        </Row>
      </Container>
    </Form>
  );
}
