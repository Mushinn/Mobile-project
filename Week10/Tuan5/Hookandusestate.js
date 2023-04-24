import React, { Component } from "react";
import { Button, FlatList, TouchableOpacity } from "react-native";
import { Text, StyleSheet, View } from "react-native";
export default class EmptyArray extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
    };
  }
  randomNumber = () => Math.floor(Math.random() * 100);
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Thêm "
          onPress={() =>
            this.setState({ array: [...this.state.array, this.randomNumber()] })
          }
        />
        <Button
          title="Xoá "
          onPress={() => {
            const newArray = [...this.state.array];
            newArray.pop();
            this.setState({ array: newArray });
          }}
        />

        <FlatList
          data={this.state.array}
          renderItem={(items) => (
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  array: this.state.array.filter((item) => item != items.item),
                });
              }}
            >
              <View style={styles.item}>
                <Text style={{ ...styles.text, fontSize: 20 }}>
                  {items.item}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          //    keyExtractor={(item) => item}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: "white",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});