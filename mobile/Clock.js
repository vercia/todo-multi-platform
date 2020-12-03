import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Headline } from "react-native-paper";

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      setDate(now);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return <Headline style={styles.clock}>{date}</Headline>;
};

const styles = StyleSheet.create({
  clock: {
    color: "white"
  }
});

export default Clock;
