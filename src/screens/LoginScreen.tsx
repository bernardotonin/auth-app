import { View, Text, StyleSheet, Keyboard } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryInput from "../components/PrimaryInput";
import ArrowButton from "../components/ArrowButton";
import { useForm, Controller} from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

type FormData = {
    email: string,
    password: string
}

const LoginScreen = () => {

    const {control, handleSubmit, formState: { errors }} = useForm<FormData>();

    const onPressLogin = (data : FormData) => {
        console.log(data.email);
        console.log(data.password);
        Keyboard.dismiss();
    }

    const onPressForgetPw = () => {
    }


    return (
        <View>
            <Text style={style.header}>Login</Text>
                <View style={style.inputGroup}>
                    <View style={style.emailInput}>
                        <Controller 
                        control={control}
                        name="email"
                        rules={{
                            required: "Email is mandatory.",
                            pattern: {
                                message: "Please enter a valid email.",
                                value: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
                            }
                        }}
                        render={({field : { value, onChange}})=> (
                            <PrimaryInput label= {'Email'} placeholder= "Please enter your email" value={value} onChangeText={onChange} autoCapitalize="none" error={errors?.email?.message}/>
                        )}/>
                    </View>
                    <View style={style.passwordInput}>
                        <Controller 
                        control={control}
                        name="password"
                        rules={{
                            required: "Password is mandatory."
                            minLength: {
                                value: 4,
                                message: "Password must be at least 4 characters long."
                            }

                        }}
                        render={({field : { value, onChange}})=> (
                            <PrimaryInput label={'Password'} password={true} placeholder= "Please enter your password" value={value} onChangeText={onChange} error={errors?.password?.message}/>
                        )}/>
                        
                    </View>
                    <View style={style.forgotButton}>
                        <ArrowButton title="Forgot your password?" onPress={onPressForgetPw}/>
                    </View>
                    <View style={style.buttonContainer}>
                        <PrimaryButton onPress={handleSubmit(onPressLogin)}>LOGIN</PrimaryButton>
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