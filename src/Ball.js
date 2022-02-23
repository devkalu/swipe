import React from "react";
import { Animated, View, StyleSheet } from "react-native";

export default class Ball extends React.Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 },
      //   useNativeDriver: false,
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "black",
  },
});
