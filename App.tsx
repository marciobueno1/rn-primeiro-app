import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Provider as PaperProvider } from "react-native-paper";

function Clock() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    console.log("componentDidMount");
    const timerID = setInterval(tick, 1000);
    return () => {
      console.log("componentWillUnmount");
      clearInterval(timerID);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 49, color: "white" }}>Hello, world!</Text>
      <Text style={{ fontSize: 49, color: "white" }}>
        It is {date.toLocaleTimeString()}.
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const [exibirData, setExibirData] = useState(true);

  const handleButtonPress = () => {
    setExibirData(!exibirData);
  };

  return (
    <View style={styles.container}>
      {exibirData && <Clock />}
      <Button icon="camera" mode="outlined" onPress={handleButtonPress}>
        Exibe Data
      </Button>
    </View>
  );
}

export default function PaperApp() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
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
