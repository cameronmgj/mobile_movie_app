import { Text, View } from "react-native";
import "../globals.css"
import { LogBox } from 'react-native';
import {Link} from "expo-router";
LogBox.ignoreAllLogs(false);

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-dark-200 font-bold">Welcome!</Text>
    </View>
  );
}
