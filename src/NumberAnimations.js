import React from "react";
import {
  Easing,
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableHighlight,
} from "react-native";

export default class NumberAnimations extends React.Component {
  animatedValue1 = new Animated.Value(-30);
  animatedValue2 = new Animated.Value(-30);
  animatedValue3 = new Animated.Value(-30);

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    const createAnimation = (value) => {
      return Animated.timing(value, { toValue: 290, duration: 500 });
    };
    Animated.sequence([
      createAnimation(this.animatedValue1),
      createAnimation(this.animatedValue2),
      createAnimation(this.animatedValue3),
    ]).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <Animated.Text
          style={[styles.title, { marginTop: this.animatedValue1 }]}
        >
          1
        </Animated.Text>
        <Animated.Text
          style={[styles.title, { marginTop: this.animatedValue2 }]}
        >
          2
        </Animated.Text>
        <Animated.Text
          style={[styles.title, { marginTop: this.animatedValue3 }]}
        >
          3
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    marginHorizontal: 20,
  },
  //   subTitle: {
  //     width: "100%",
  //     textAlign: "center",
  //     fontSize: 18,
  //     opacity: 0.8,
  //   },
  //   button: {
  //     marginTop: 25,
  //     backgroundColor: "#ddd",
  //     height: 55,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginHorizontal: 10,
  //   },
});
