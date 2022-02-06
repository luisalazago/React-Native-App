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
  Flex: is use to configure the dimensions of the component box.
*/

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1
    }}>
      <View style={{
        backgroundColor: "gold",
        flex: 1.5
      }}/>
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 1.2
      }}/>
      <View style={{
        backgroundColor: "tomato",
        flex: 1
      }}/>
    </View>
  );
}
