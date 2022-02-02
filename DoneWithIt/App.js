import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

/* SafeAreaView let the text into the box to the app */

export default function App() {
  console.log(require("./assets/favicon.png"));
  const handlePress = () => console.log("Screen press");

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Hello World! This is a test to test (I know funny) what happen if 
        the text is too long for the box on the app :p
      </Text>
      <Image source={require("./assets/favicon.png")}/>
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
