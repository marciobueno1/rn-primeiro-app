import { StatusBar } from "expo-status-bar";
import React, { Props } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App(): JSX.Element {
  console.log("teste3...");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 49, color: "white" }}>Hello World!</Text>
      <Text style={{ fontSize: 30, color: "yellow" }}>Novo texto!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={{ fontSize: 50, color: "white" }}>Hello World!</Text>
//         <Text style={{ fontSize: 28, color: "yellow" }}>Novo texto!</Text>
//         <StatusBar style="auto" />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
