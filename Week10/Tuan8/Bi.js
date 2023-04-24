import { View, StyleSheet } from "react-native"
import React, { Component } from "react"
import { connect } from "react-redux"

export class Bi extends Component {
  mau = () => {
    return `rgb(${this.props.do}, ${this.props.xanhLa}, ${this.props.xanhDuong})`
  }
  render() {
    return (
      <View
        style={{
          ...styles.bi,
          backgroundColor: this.mau(),
        }}
      ></View>
    )
  }
}

const styles = StyleSheet.create({
  bi: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 30,
  },
})

const mapStateToProps = (state) => {
  return { do: state.do, xanhLa: state.xanhLa, xanhDuong: state.xanhDuong }
}

export default connect(mapStateToProps)(Bi)
