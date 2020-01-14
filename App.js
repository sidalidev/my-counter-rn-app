import React, { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  function decrementCounter() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function renderBelowZeroAlert() {
    if (count < 1) {
      return <Text style={{ color: "red" }}>Can't go below 0</Text>;
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Counter App</Text>
        <View style={styles.countContainer}>
          <Text>{count}</Text>
          <View style={styles.actionButtons}>
            <Button title="-" onPress={decrementCounter} />
            <Button title="+" onPress={incrementCounter} />
          </View>
          {renderBelowZeroAlert()}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  countContainer: {
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
