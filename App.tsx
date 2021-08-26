import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ClockProps {
  date: Date;
}

function Clock(props: ClockProps) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 49, color: "white" }}>Hello, world!</Text>
      <Text style={{ fontSize: 49, color: "white" }}>
        It is {props.date.toLocaleTimeString()}.
      </Text>
    </View>
  );
}

export default function App(): JSX.Element {
  return <Clock date={new Date()} />;
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
