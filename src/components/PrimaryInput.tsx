import { useState } from "react";
import { View, TextInput, StyleSheet, Text} from "react-native";
import { TextInputProps } from "react-native";
import colors from "../styles/colors";

interface InputProps extends TextInputProps {
    label: String,
    error?: String,
    password?: any
}


const PrimaryInput = ({label, error, password = false, onFocus = () => {}, ...props}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    
    return (
        <View style={[style.outerContainer ,{borderWidth: error ? 2 : isFocused ? 2 : 0 ,borderColor : error ? '#960101' : isFocused ? colors.red500 : 'black'}]}>
            <Text style={style.label}>{label}</Text>
            <View style={style.inputContainer}>
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
        borderRadius: 6,
    },

    inputContainer: {
        width: 343,
        height: 64,
        padding: 4,
    },

    input: {
        flex: 1,
    },

    errorMsg: {
        color: '#960101',
        textAlign: 'center',
        marginTop: 2
    },
    label: {
        color: '#9B9B9B',
        fontSize: 11
    }
});

export default PrimaryInput;