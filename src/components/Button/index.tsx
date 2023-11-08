import React, { FunctionComponent, MouseEventHandler, cloneElement } from 'react'
import { Container } from "./styles";

type ButtonProps = {
    title: string;
    icon?: {
        icon: JSX.Element
    };
    loading?: boolean;
    outlined?: boolean;
    onClick?: MouseEventHandler
}

export const Button: FunctionComponent<ButtonProps & React.ButtonHTMLAttributes<HTMLElement>> = ({icon, loading = false, outlined = false, onClick, title, ...rest}) => {


    return(
        <Container 
            type="button" 
            disabled={loading}
            $outlined={outlined}
            {...rest}
            onClick={(e) => {
                onClick && onClick(e)
            }}
        >
            {icon && cloneElement(icon.icon)}
            { loading ? 'Carregando...' : title }
        </Container>
    )
}