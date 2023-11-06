import React, { FunctionComponent, MouseEventHandler, cloneElement, useState } from 'react'
import { Container } from "./styles";

type ButtonProps = {
    title: string;
    icon?: {
        icon: JSX.Element
    };
    loading?: boolean;
    outlined?: boolean;
    toggle?: boolean;
    onClick?: MouseEventHandler
    handleHour?: Function
}

export const Button: FunctionComponent<ButtonProps & React.ButtonHTMLAttributes<HTMLElement>> = ({icon, handleHour, loading = false, outlined = false, toggle, onClick, title, ...rest}) => {
    const [toggleButton, setToggleButton] = useState(true)


    return(
        <Container 
            type="button" 
            disabled={loading}
            $outlined={toggle ? toggleButton : outlined}
            {...rest}
            onClick={(e) => {
                onClick && onClick(e)
                setToggleButton(!toggleButton)
                handleHour && handleHour(title)
            }}
        >
            {icon && cloneElement(icon.icon)}
            { loading ? 'Carregando...' : title }
        </Container>
    )
}