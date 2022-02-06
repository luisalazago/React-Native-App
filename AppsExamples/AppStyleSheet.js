import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Button, SafeAreaView,
  Alert
} from 'react-native';

/* 
  SafeAreaView let the text into the box to the app 
  Alert.promt permite enviar texto por medio de un alert (input)
*/

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyles]}>
      <Button title="Click me!" onPress={() => console.log("Button Tapped")}/>
    </SafeAreaView>
  );
}

const containerStyles = {backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: "center",
    alignItems: "center"
  },
});
