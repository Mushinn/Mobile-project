import { Text, View, StyleSheet } from "react-native"
import React, { Component } from "react"
import { connect } from "react-redux"

export class NhietDo extends Component {
  render() {
    return (
      <View>
        <Text style={styles.nhietDo}>Nhiệt độ: {this.props.nhietDo}</Text>
        <Text style={styles.nhietDo}>Độ ẩm: {this.props.doAm}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  nhietDo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
})

const mapStateToProps = (state) => {
  return { nhietDo: state.nhietDo, doAm: state.doAm }
}

export default connect(mapStateToProps)(NhietDo)
