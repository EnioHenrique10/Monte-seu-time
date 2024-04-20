import { TextInput, TextInputProps } from "react-native";

import { Container } from "./styles";


type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}

export function Input({inputRef, ...res}: Props){
    return(
        <Container 
        ref={inputRef}
         placeholderTextColor="gray"
         {...res}
        />
    )
}