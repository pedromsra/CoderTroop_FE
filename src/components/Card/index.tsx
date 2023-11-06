import React, { FunctionComponent, cloneElement } from "react";
import { Container } from "./styles";

type CardProps = {
    best?: boolean;
    header?: string;
    title?: string;
    comment?: boolean;
    icon?: {
        icon: JSX.Element
    };
    children: React.ReactNode;
}

export const Card: FunctionComponent<CardProps> = ({ best = false, header = false, title = false, icon, children, comment = false }) => {
    return (
        <Container $title={title ? true : false} $comment={comment} $best={best} $header={header ? true : false} >
            {best && <div className="best">MAIS PEDIDO</div>}
            {icon && cloneElement(icon.icon)}
            {title && <div className="title">{title}</div>}
            {header && <div className="header">{header}<div className="borderTop" /></div>}
            
            {children}
        </Container>
    )
}