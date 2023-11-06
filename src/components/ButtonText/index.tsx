import React, { FunctionComponent, cloneElement } from 'react';
import { Container} from './styles';

type ButtonTextProps = {
    title: string;
    icon?: {
        icon: JSX.Element
    };
    isActive?: boolean;
}

export const ButtonText: FunctionComponent<ButtonTextProps & React.ButtonHTMLAttributes<HTMLElement>> = ({title, icon, isActive = false, ...rest}) => {
    return(
        <Container type="button" $isActive = {isActive} {...rest}>
            {icon && cloneElement(icon.icon)}
            {title}
        </Container>
    );
}