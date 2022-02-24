import React, { Component } from "react";
import { StyleSheet, View, Animated, Text, Easing } from "react-native";

export default class SpinningLoading extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.animate();
    setTimeout(() => this.setState({ loading: false }), 3000);
  }
  animatedRotation = new Animated.Value(0);
  animate = () => {
    Animated.loop(
      Animated.timing(this.animatedRotation, {
        toValue: 1,
        duration: 1800,
        useNativeDriver: true,
        easing: Easing.linear,
        //   useNativeDriver: true,
      })
    ).start();
  };
  render() {
    const rotation = this.animatedRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <Animated.Image
            source={require("../assets/loading.png")}
            style={{
              width: 40,
              height: 40,
              transform: [{ rotate: rotation }],
            }}
          />
        ) : (
          <Text>Welcome</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: "#ededed",
    marginTop: 20,
    paddingHorizontal: 9,
  },
});
