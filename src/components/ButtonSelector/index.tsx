import { FunctionComponent, cloneElement } from 'react';
import { Container} from './styles';

type ButtonSelectorProps = {
    title: string;
    icon?: {
        icon: JSX.Element
    };
    isActive?: boolean;
}

export const ButtonSelector: FunctionComponent<ButtonSelectorProps & React.ButtonHTMLAttributes<HTMLElement>> = ({title, icon, isActive = false, ...rest}) => {
    return(
        <Container type="button" $isActive = {isActive} {...rest}>
            {icon && cloneElement(icon.icon)}
            {title}
        </Container>
    );
}