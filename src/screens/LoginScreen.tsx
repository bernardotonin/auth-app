import { View, Text, StyleSheet, Keyboard, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import PrimaryInput from "../components/PrimaryInput";
import ArrowButton from "../components/ArrowButton";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/AppNavigator";
import SocialsButton from "../components/SocialsButton";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

type FormData = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const auth = FIREBASE_AUTH;

  const signIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigator.navigate("insidePage", { name: result.user.displayName! });
      })
      .catch((error) => {
        Alert.alert("Error", `Error: ${error}`, [
          { text: "Ok", style: "destructive" },
        ]);
      });
  };

  const navigator = useNavigation<StackTypes>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onPressLogin = (data: FormData) => {
    signIn(data.email, data.password);
    Keyboard.dismiss();
  };

  const onPressForgetPw = () => {
    navigator.navigate("forgotpw");
  };
    
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
                value: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
              },
            }}
            render={({ field: { value, onChange } }) => (
              <PrimaryInput
                label={"Email"}
                placeholder="Please enter your email"
                value={value}
                onChangeText={onChange}
                autoCapitalize="none"
                error={errors?.email?.message}
              />
            )}
          />
        </View>
        <View style={style.passwordInput}>
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password is mandatory.",
            }}
            render={({ field: { value, onChange } }) => (
              <PrimaryInput
                label={"Password"}
                password={true}
                placeholder="Please enter your password"
                value={value}
                onChangeText={onChange}
                error={errors?.password?.message}
              />
            )}
          />
        </View>
        <View style={style.forgotButton}>
          <ArrowButton
            title="Forgot your password?"
            onPress={onPressForgetPw}
          />
        </View>
        <View style={style.buttonContainer}>
          <PrimaryButton onPress={handleSubmit(onPressLogin)}>
            LOGIN
          </PrimaryButton>
        </View>
        <View style={style.socials}>
          <SocialsButton />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    fontFamily: "roboto-bold",
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 130,
    marginLeft: 14,
  },
  inputGroup: {
    justifyContent: "center",
    alignItems: "center",
  },

  forgotButton: {
    alignSelf: "flex-end",
    marginRight: 14,
  },
  emailInput: {
    marginTop: 64,
    marginBottom: 8,
  },

  passwordInput: {
    marginBottom: 20,
  },

  buttonContainer: {
    marginTop: 32,
  },
  socials: {
    marginTop: 220,
  },
});

export default LoginScreen;
