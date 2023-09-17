import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet } from "react-native";

const SocialsButton = () => {
  return (
    <View>
      <Text>Or sign up with social account</Text>
      <View style={style.socialButtonContainer}>
        <View style={style.socialButton}>
          <Ionicons name="logo-google" size={24} style={{ color: "#3B5998" }} />
        </View>
        <View style={style.socialButton}>
          <Ionicons
            name="logo-facebook"
            size={24}
            style={{ color: "#4285F4" }}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  socialButton: {
    width: 92,
    height: 64,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  socialButtonContainer: {
    flexDirection: "row",
  },
});

export default SocialsButton;
