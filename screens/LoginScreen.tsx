import { View, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const LoginScreen = () => {
    const onPressHandler = () => {
        console.log('pressed');
    }

    return (
        <View>
            <Text>Login Screen</Text>
            <PrimaryButton onPress={onPressHandler}>Login</PrimaryButton>
        </View>
    );
}

export default LoginScreen;