import {
  View,
  Pressable,
  Text,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import colors from "../styles/colors";
type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  children: String;
};

const PrimaryButton = ({ onPress, children }: ButtonProps) => {
  return (
    <View style={style.buttonView}>
      <Pressable style={style.buttonPressable} onPress={onPress}>
        <View style={style.textContainer}>
          <Text style={style.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  buttonView: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    width: 343,
    height: 48,
  },

  buttonPressable: {
    backgroundColor: colors.red500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 343,
    height: 48,
  },

  buttonText: {
    color: "#FFF",
  },

  textContainer: {
    alignItems: "center",
    marginTop: 6,
  },
});

export default PrimaryButton;
