import { View, Text, StyleSheet, Keyboard } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryInput from "../components/PrimaryInput";
import ForgotPwButton from "../components/ForgotPwButton";
import { useForm, Controller} from "react-hook-form";

type FormData = {
    email: string,
    password: string
}

const LoginScreen = ({...props}) => {
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
                            required: "Email Obrigatório."
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
                            required: "Insira sua Senha."
                        }}
                        render={({field : { value, onChange}})=> (
                            <PrimaryInput label={'Password'} password={true} placeholder= "Password" value={value} onChangeText={onChange} error={errors?.password?.message}/>
                        )}/>
                        
                    </View>
                    <View style={style.forgotButton}>
                        <ForgotPwButton onPress={onPressForgetPw}/>
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