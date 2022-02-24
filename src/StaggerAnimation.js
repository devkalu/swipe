import React from "react";
import {
  Easing,
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableHighlight,
} from "react-native";

export default class StaggerAnimations extends React.Component {
  constructor() {
    super();
    this.animatedValue = [];
    for (let i = 0; i < 1000; i++) {
      this.animatedValue[i] = new Animated.Value(0);
    }
    this.animations = this.animatedValue.map((value) => {
      return Animated.timing(value, {
        toValue: 1,
        duration: 6000,
      });
    });
  }
  componentDidMount() {
    this.animate();
  }
  animate = () => {
    Animated.stagger(15, this.animations).start();
  };
  render() {
    return (
      <View style={styles.container}>
        {this.animatedValue.map((value, index) => (
          <Animated.View key={index} style={[{ opacity: value }, styles.box]} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: 15,
    height: 15,
    margin: 0.5,
    backgroundColor: "red",
  },
});
