import { Container, Row } from "react-bootstrap";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page" className="p-4">
      <Row>
        <h1>Oops!</h1>
      </Row>
      <Row>
        <p>Sorry, an unexpected error has occurred.</p>
      </Row>

      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  );
}
