import React from "react";
import { 
  StyleSheet, Dimensions, SafeAreaView,
  Platform, StatusBar, View
} from 'react-native';

/* 
  SafeAreaView let the text into the box to the app 
  Alert.promt permite enviar texto por medio de un alert (input)
  Platform is use to have a size about the status bar
*/

export default function App() {
  console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: "50%",
        height: 70
      }}></View>
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
