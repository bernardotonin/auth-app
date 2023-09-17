import Ionicons from "@expo/vector-icons/Ionicons";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import colors from "../styles/colors";

interface ArrowButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

const ArrowButton = ({ onPress, title }: ArrowButtonProps) => {
  return (
    <View>
      <Pressable style={style.mainContainer} onPress={onPress}>
        <Text>{title}</Text>
        <Ionicons
          name="arrow-forward-outline"
          color={colors.red500}
          size={24}
        />
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ArrowButton;
