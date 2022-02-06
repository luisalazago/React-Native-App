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
    <SafeAreaView style={styles.container}>
      <Button
        title="Click me!" 
        onPress={() => Alert.alert("My title", "My message", [
          {text: "Yes", onPress: () => console.log("Yes")},
          {text: "No", onPress: () => console.log("No")}
        ])}
      />
      <Button
        title="Push me >.<"
        onPress={() => Alert.prompt(
          "My title", "My message", text => console.log(text)
          )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});
