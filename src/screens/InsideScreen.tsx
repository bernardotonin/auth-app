import { View, Text, StyleSheet } from "react-native";

import { RouteProp } from "@react-navigation/native";

type insideScreenProps = {
  route: RouteProp<{ params: { name: string } }, "params">;
};

const InsideScreen = ({ route }: insideScreenProps) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello {route.params.name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  text: {
    marginTop: 150,
  },
});

export default InsideScreen;
