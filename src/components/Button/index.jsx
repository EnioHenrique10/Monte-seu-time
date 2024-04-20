import {TouchableOpacityProps} from 'react-native';

import {Container, Title, ButtonTypeStyleProps} from './styles';


type Props = TouchableOpacityProps & {
    title: String;
    type?: ButtonTypeStyleProps;
}

export function Button({title, type = 'PRIMARY', ...rest}: Props){
     return(
        <Container 
         type={type}
        {...rest}>
        <Title>
            {title}
        </Title>
        </Container>
     )
}