import { Container, Row } from "react-bootstrap";
import PromptCard from "../components/prompt-card";
import { faker } from "@faker-js/faker";

export default function Prompts() {
  return (
    <Container>
      {cardData.map((prompt) => {
        return (
          <Row className="m-2">
            <PromptCard prompt={prompt}></PromptCard>
          </Row>
        );
      })}
    </Container>
  );
}

export interface Prompt {
  cardTitle: string;
  cardSubtitle: string;
}

const cardData: Prompt[] = new Array(10).fill(null).map(() => ({
  cardTitle: faker.word.words(2),
  cardSubtitle: faker.word.words(4),
}));
