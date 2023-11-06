import { FunctionComponent, ReactNode, useState } from "react";
import { Container } from "./styles";

type SectionProps = {
    title: string;
    onClick?: React.MouseEventHandler;
    children: ReactNode;
}

export const SmallSection: FunctionComponent<SectionProps> = ({ title, children, onClick }) => {
    const [toggleButton, setToggleButton] = useState(false)
    return (
        <Container $isActive={toggleButton}>
            <div className="header" onClick={(e) => {
                onClick && onClick(e)
                setToggleButton(!toggleButton)
            }}><h2>{title}</h2>{
                toggleButton 
                ? 
                <span className="material-symbols-outlined">expand_less</span>
                :
                <span className="material-symbols-outlined">expand_more</span>
            }</div>
            <div className="children">{children}</div>
        </Container>
    )
}