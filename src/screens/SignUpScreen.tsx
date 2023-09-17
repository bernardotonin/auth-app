import PrimaryButton from "../components/PrimaryButton";
import PrimaryInput from "../components/PrimaryInput";
import ArrowButton from "../components/ArrowButton";
import { View, Text, StyleSheet, Keyboard, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../routes/AppNavigator";
import SocialsButton from "../components/SocialsButton";
import {
  createUserWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const SignUpScreen = () => {
  const navigator = useNavigation<StackTypes>();
  const auth = FIREBASE_AUTH;

  type SignUpFormData = {
    name: string;
    email: string;
    password: string;
  };

  const signUp = async (email: string, password: string, name: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(result.user, { displayName: name });
      })
      .catch((error) => {
        Alert.alert("Error", `Error: ${error}`, [
          { text: "Ok", style: "destructive" },
        ]);
      });
    Alert.alert("Sign Up", "Sign up Sucessfully", [
      { text: "Ok", style: "default" },
    ]);

    navigator.navigate("login");
  };

  const onPressLogin = () => {
    navigator.navigate("login");
  };

  const onPressSignUp = (data: SignUpFormData) => {
    signUp(data.email, data.password, data.name);
    Keyboard.dismiss();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();
  return (
    <View>
      <Text style={style.header}>Sign Up</Text>
      <View style={style.inputGroup}>
        <View style={style.nameInput}>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "Please enter a valid name",
            }}
            render={({ field: { onChange, value } }) => (
              <PrimaryInput
                label="Name"
                placeholder="Enter your name"
                error={errors?.name?.message}
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>

        <View style={style.emailInput}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is mandatory.",
              pattern: {
                message: "Please enter a valid email.",
                value: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
              },
            }}
            render={({ field: { onChange, value } }) => (
              <PrimaryInput
                label="Email"
                placeholder="Enter your email"
                error={errors?.email?.message}
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>

        <View style={style.passwordInput}>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is mandatory.",
              minLength: {
                message: "Password must be at least 6 characters long.",
                value: 6,
              },
            }}
            render={({ field: { onChange, value } }) => (
              <PrimaryInput
                label="Password"
                placeholder="Enter your password"
                error={errors?.password?.message}
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
                password={true}
              />
            )}
          />
        </View>
        <View style={style.loginButton}>
          <ArrowButton
            title="Already have an account?"
            onPress={onPressLogin}
          />
        </View>
        <View style={style.buttonContainer}>
          <PrimaryButton onPress={handleSubmit(onPressSignUp)}>
            SIGN UP
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
    marginTop: 100,
    marginLeft: 14,
  },
  inputGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    alignSelf: "flex-end",
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
    marginTop: 32,
  },
  socials: {
    marginTop: 180,
  },
});

export default SignUpScreen;
