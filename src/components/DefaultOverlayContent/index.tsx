import { FC } from "react";
import { Container, Buttons, Heading } from "./styles";

interface IDefaultOverlayContentProps {
    label: string;
    description: string;
}

export const DefaultOverlayContent: FC<IDefaultOverlayContentProps> = ({
    label,
    description,
}) => {
    return (
        <Container>
            <Heading>
                <h1>{label}</h1>
                <h2>{description}</h2>
            </Heading>

            <Buttons>
                <button onClick={() => window.location.href = '#Contact Me'}>Contact Me</button>
                <button className="white" onClick={() => window.location.href = '#My Recent Work'}>Projects</button>
            </Buttons>
        </Container>
    );
};