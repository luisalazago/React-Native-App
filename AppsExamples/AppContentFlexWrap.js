import React from "react";
import {View} from 'react-native';

/* 
  SafeAreaView: let the text into the box to the app.
  Alert.promt: permite enviar texto por medio de un alert (input).
  Platform: is use to have a size about the status bar. Depends of the OS used.
  Dimensions: get the information about the screen's device.
  useDeviceOrientation: configure the width and height of the screen if the 
                        orientation is portrait or landscape.
  useDimensions: get the default dimensions of the device.
  Flex: is use to configure the dimensions of the component box.
  FlexDirection: with this property we can change the orientation of the contet below.
  JustifyAndAling: these properties modify the position and the access of the object.
  FlexWrap: this property fix the distribution of the objects.
  AlignContent: this property align all the objects selected.
*/

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center", // Main access
      alignItems: "center", // Secondary access
      flexWrap: "wrap",
      alignContent: "center"
    }}>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 300
      }}/>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: "grey",
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: "greenyellow",
        width: 100,
        height: 100
      }}/>
    </View>
  );
}
