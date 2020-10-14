import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TouchableOpacity} from "react-native";

export default class App extends React.Component {

  state = {
    isEnabled: false
  };

  handleClick = () => {
    this.setState({
      ...this.state,
      isEnabled: !this.state.isEnabled
    })
  };

  render() {
    const { isEnabled } = this.state;

    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Zadanie 2</Text>

          <TouchableOpacity style={styles.button} onPress={this.handleClick}>
            <Text>{isEnabled ? "Ukryj" : "Pokaż"}</Text>
          </TouchableOpacity>

          {isEnabled && <><Text style={styles.text}>Nazywam się</Text><Text style={styles.textBold}>Mateusz Janczak</Text></>}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 20
  },
  heading: {
    fontSize: 20
  },
  text: {
    fontSize: 16
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
