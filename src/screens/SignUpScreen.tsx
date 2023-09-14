import PrimaryButton from "../components/PrimaryButton";
import PrimaryInput from "../components/PrimaryInput";
import ArrowButton from "../components/ArrowButton";
import { View, Text, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/AppNavigator";


const SignUpScreen = () => {
    const navigator = useNavigation<StackTypes>();

    type SignUpFormData = {
        name: string,
        email: string,
        password: string
    }


    const onPressLogin = () => {
        navigator.navigate('login');
    }

    const onPressSignUp = (data: SignUpFormData) => {
    }

    const {control, handleSubmit ,formState: { errors }} = useForm<SignUpFormData>();
    return (
        <View>
            <Text style={style.header}>Sign Up</Text>
            <View style={style.inputGroup}>
                <View style={style.nameInput}>
                    <Controller 
                        name="name"
                        control={control}
                        rules={{
                            required: "Please enter a valid name"
                        }} 
                        render={({field: {onChange, value}}) => (
                        <PrimaryInput label="Name" placeholder="Enter your name" error={errors?.name?.message} autoCapitalize="none" value={value} onChangeText={onChange}/>
                    )}/>
                </View>
            
                <View style={style.emailInput}>
                    <Controller 
                            name="email"
                            control={control}
                            rules={{
                                required: "Email is mandatory.",
                                pattern: {
                                    message: "Please enter a valid email.",
                                    value: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
                                }
                            }} 
                            render={({field: {onChange, value}}) => (
                            <PrimaryInput label="Email" placeholder="Enter your email" error={errors?.email?.message} autoCapitalize="none" value={value} onChangeText={onChange}/>
                    )}/>
                </View>

                <View style={style.passwordInput}> 
                    <Controller 
                                name="password"
                                control={control}
                                rules={{
                                    required: "Password is mandatory.",
                                    minLength: {
                                        message: "Password must be at least 4 characters long.",
                                        value: 4
                                    }
                                }} 
                                render={({field: {onChange, value}}) => (
                                <PrimaryInput label="Password" placeholder="Enter your password" error={errors?.password?.message} autoCapitalize="none" value={value} onChangeText={onChange} password={true}/>
                    )}/>
                </View>
                <View style={style.loginButton}>
                    <ArrowButton title="Already have an account?" onPress={onPressLogin}/>
                </View>
                <View style={style.buttonContainer}>
                    <PrimaryButton onPress={handleSubmit(onPressSignUp)}>SIGN UP</PrimaryButton>
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
    loginButton: {
        alignSelf: 'flex-end',
        marginRight: 14,
    },
    nameInput: {
        marginTop: 64,
        marginBottom: 4,
    },
    emailInput: {
        marginBottom: 4,
    },

    passwordInput: {
        marginBottom: 8,
    },

    buttonContainer: {
        marginTop: 32
    }
});

export default SignUpScreen;