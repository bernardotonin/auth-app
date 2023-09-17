import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import InsideScreen from "../screens/InsideScreen";

const Stack = createNativeStackNavigator();

type StackNavigation = {
  signup: undefined;
  login: undefined;
  forgotpw: undefined;
  insidePage: {
    name: string;
  };
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup">
        <Stack.Screen
          name="signup"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerTitle: "", headerTransparent: true }}
        />
        <Stack.Screen
          name="forgotpw"
          component={ForgotPasswordScreen}
          options={{ headerTitle: "", headerTransparent: true }}
        />
        <Stack.Screen
          name="insidePage"
          component={InsideScreen}
          options={{ headerTitle: "", headerTransparent: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
