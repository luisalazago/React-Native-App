import React from "react";
import { 
  StyleSheet, Button, SafeAreaView,
  Platform, StatusBar
} from 'react-native';

/* 
  SafeAreaView let the text into the box to the app 
  Alert.promt permite enviar texto por medio de un alert (input)
*/

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click me!" onPress={() => console.log("Button Tapped")}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
