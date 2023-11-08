import React, { FunctionComponent, cloneElement } from 'react';
import { Container} from './styles';

type ButtonTextProps = {
    title: string;
    icon?: {
        icon: JSX.Element
    };
}

export const ButtonText: FunctionComponent<ButtonTextProps & React.ButtonHTMLAttributes<HTMLElement>> = ({title, icon, ...rest}) => {
    return(
        <Container type="button"  {...rest}>
            {icon && cloneElement(icon.icon)}
            {title}
        </Container>
    );
}