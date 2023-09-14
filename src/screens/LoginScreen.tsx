import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryInput from "../components/PrimaryInput";
import ForgotPwButton from "../components/ForgotPwButton";



const LoginScreen = ({...props}) => {
    const onPressLogin = () => {
        console.log('pressed');
    }

    const onPressForgetPw = () => {
        
    }


    return (
        <View>
            <Text style={style.header}>Login</Text>
                <View style={style.inputGroup}>
                    <View style={style.emailInput}>
                        <PrimaryInput label= {'Email'}  placeholder= "Please enter your email"/>
                    </View>
                    <View style={style.passwordInput}>
                        <PrimaryInput label={'Password'} password={true} placeholder= "Password"/>
                    </View>
                    <View style={style.forgotButton}>
                        <ForgotPwButton onPress={onPressForgetPw}/>
                    </View>
                    <View style={style.buttonContainer}>
                        <PrimaryButton onPress={onPressLogin}>LOGIN</PrimaryButton>
                </View>
                </View>
        </View>
    );
}

const style = StyleSheet.create({
    header: {
        fontFamily: 'roboto-bold',
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 100,
        marginLeft: 14
        
    },
    inputGroup: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    forgotButton: {
        alignSelf: 'flex-end',
        marginRight: 14,
    },
    emailInput: {
        marginTop: 64,
        marginBottom: 8,
    },

    passwordInput: {
        marginBottom: 16,
    },

    buttonContainer: {
        marginTop: 32
    }
});

export default LoginScreen;