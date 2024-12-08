import { FC } from "react";
import { DefaultOverlayContent } from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";
import { UniqueOverlay } from "../UniqueOverlay";
import { Container, Spacer } from "./styles";
import { pageData } from "../../data/page";
import Projects from "../Projects";

export const Page: FC = () => {
    return (
        <Container>
            <ModelsWrapper>
                <>
                    <div>
                        {pageData.map(({title, description}, index) => (
                            <ModelSection
                                key={index}
                                className="colored"
                                id={title}
                                modelName={title}
                                overlayNode={
                                    <DefaultOverlayContent
                                        label={title}
                                        description={description}
                                    />
                                }
                            >
                            { index == 2 ? <Projects /> : undefined }
                            </ModelSection>
                        ))}
                
                    </div>

                    <Spacer />

                    <UniqueOverlay />
                </>
            </ModelsWrapper>
        </Container>
    );
};