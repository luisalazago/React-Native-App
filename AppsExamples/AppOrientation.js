import React from "react";
import { 
  StyleSheet, Dimensions, SafeAreaView,
  Platform, StatusBar, View
} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";

/* 
  SafeAreaView: let the text into the box to the app.
  Alert.promt: permite enviar texto por medio de un alert (input).
  Platform: is use to have a size about the status bar. Depends of the OS used.
  Dimensions: get the information about the screen's device.
  useDeviceOrientation: configure the width and height of the screen if the 
                        orientation is portrait or landscape.
  useDimensions: get the default dimensions of the device.
*/

export default function App() {
  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: "100%",
        height: landscape ? "100%" : "30%"
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
