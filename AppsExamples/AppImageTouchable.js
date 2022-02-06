import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Text, SafeAreaView, 
  Image, TouchableNativeFeedback,
  View
} from 'react-native';

/* SafeAreaView let the text into the box to the app */

export default function App() {
  console.log(require("./assets/favicon.png"));

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Hello World! This is a test to test (I know funny) what happen if 
        the text is too long for the box on the app :p
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View style={{width: 200, height: 70, backgroundColor: "dodgerblue"}}/>
      </TouchableNativeFeedback>
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/seed/picsum/200/300"}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "center"
  },
});
