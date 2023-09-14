import { View, Text, StyleSheet } from "react-native";
import PrimaryInput from "../components/PrimaryInput";
import { useForm, Controller} from "react-hook-form";
import PrimaryButton from "../components/PrimaryButton";

type FormData = {
    email: string
}

const ForgotPasswordScreen = () => {
    const {control, handleSubmit, formState: { errors }} = useForm<FormData>();


    const onPressSend = (data: FormData) => {

    }

    return (
        <View style={style.container}>
            <Text style={style.header}>Forgot Password</Text>
            <Text style={style.instructions}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
            <Controller 
                name="email" 
                control={control}
                rules={{
                    required: "Email Obrigatório.",
                    pattern: {
                        message: "Insira um email válido.",
                        value: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
                    }
                }}
                render={({field: {value, onChange}}) => (
                <PrimaryInput label={"Email"}  placeholder="Enter your email" value={value} onChangeText={onChange} autoCapitalize="none" error={errors?.email?.message}/>
            )}/>
            <View style={style.buttonContainer}>
                <PrimaryButton onPress={handleSubmit(onPressSend)}>SEND</PrimaryButton>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center'
    },

    header: {
        fontFamily: 'roboto-bold',
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 100,
        marginLeft: 14,
        alignSelf: 'flex-start'
    },

    instructions: {
        width: 343,
        marginTop: 56,
        alignSelf: 'center',
        fontSize: 14,
        fontFamily: 'roboto-regular',
        lineHeight: 20,
        marginBottom: 16,
        
    },

    buttonContainer: {
        marginTop: 32
    }
});

export default ForgotPasswordScreen;