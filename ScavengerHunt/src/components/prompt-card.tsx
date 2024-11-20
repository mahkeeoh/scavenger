import { Card, Image } from "react-bootstrap";
import { Prompt } from "../routes/prompts";

export default function PromptCard({ prompt }: { prompt: Prompt }) {
  const { cardTitle, cardSubtitle } = prompt;
  return (
    <Card>
      <Card.Body>
        <Image ></Image>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Subtitle>{cardSubtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
