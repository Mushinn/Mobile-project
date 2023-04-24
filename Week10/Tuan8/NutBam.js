import { Button, View } from "react-native"
import React, { Component } from "react"
import { connect } from "react-redux"

export class NutBam extends Component {
  render() {
    return (
      <View>
        <Button
          title="Tăng nhiệt độ"
          onPress={() => this.props.dispatch({ type: "TangNhietDo" })}
        ></Button>
        <Button
          title="Giảm nhiệt độ"
          onPress={() => this.props.dispatch({ type: "GiamNhietDo" })}
        ></Button>
        <Button
          title="Tăng độ ẩm"
          onPress={() => this.props.dispatch({ type: "TangDoAm" })}
        ></Button>
        <Button
          title="Giảm độ ẩm"
          onPress={() => this.props.dispatch({ type: "GiamDoAm" })}
        ></Button>
      </View>
    )
  }
}

export default connect()(NutBam)
