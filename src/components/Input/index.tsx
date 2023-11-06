import React, { FunctionComponent, cloneElement } from "react";
import { Container } from "./styles";

type InputProps = {
    header?: boolean;
    classNameIcon?: string;
    icon?: {
        icon: JSX.Element
    };
}

export const Input: FunctionComponent<InputProps & React.InputHTMLAttributes<HTMLElement>> = ({ header=false, classNameIcon, icon, ...rest }) => {
    return (
        <Container $isHeader={header} className={classNameIcon}>
            {icon && cloneElement(icon.icon)}
            <input {...rest} />
        </Container>
    )
}