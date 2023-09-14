import { useState } from "react";
import { View, TextInput, StyleSheet, Text} from "react-native";
import { TextInputProps } from "react-native";
import colors from "../styles/colors";
import Ionicons from '@expo/vector-icons/Ionicons'

interface InputProps extends TextInputProps {
    label: String,
    error?: String,
    password?: any
}


const PrimaryInput = ({label, error, password = false, onFocus = () => {}, ...props}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
        <View style={style.outerContainer}>
            <Text style={style.label}>{label}</Text>
            <View style={[style.inputContainer, {borderWidth: error ? 2 : isFocused ? 2 : 0 ,borderColor : error ? '#ff0000' : isFocused ? colors.red500 : 'black'}]}>
                <TextInput 
                onFocus={() => {
                    //onFocus();
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                }}
                {...props} 
                style={style.input}
                secureTextEntry={password}
                
                />
                {error && (<Ionicons style={style.errorIcon} name="close-outline" color={"red"} size={36}/>)}
            </View>
            {error && (
                <Text style={style.errorMsg}>{error}</Text>
            )}
        </View>
    );
}

const style = StyleSheet.create({
    outerContainer: {
        padding: 4,
    },

    inputContainer: {
        width: 343,
        height: 64,
        padding: 4,
        borderRadius: 6,
        flexDirection: 'row'
    },

    input: {
        flex: 1,
    },

    errorMsg: {
        color: '#ff0000',
        textAlign: 'center',
        marginTop: 2
    },
    label: {
        color: '#9B9B9B',
        fontSize: 11
    },

    errorIcon: {
        alignSelf: 'center'
    }
});

export default PrimaryInput;