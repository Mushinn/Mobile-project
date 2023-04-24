import { Button, View } from "react-native"
import React, { Component } from "react"
import { connect } from "react-redux"

export class NutBamBiRong extends Component {
  tang() {
    if (this.props.mau === "Đỏ") this.props.dispatch({ type: "TangDo" })
    if (this.props.mau === "Xanh Lá")
      this.props.dispatch({ type: "TangXanhLa" })
    if (this.props.mau === "Xanh Dương")
      this.props.dispatch({ type: "TangXanhDuong" })
  }
  giam() {
    if (this.props.mau === "Đỏ") this.props.dispatch({ type: "GiamDo" })
    if (this.props.mau === "Xanh Lá")
      this.props.dispatch({ type: "GiamXanhLa" })
    if (this.props.mau === "Xanh Dương")
      this.props.dispatch({ type: "GiamXanhDuong" })
  }
  render() {
    return (
      <View>
        <Button
          title={`Tăng ${this.props.mau}`}
          onPress={() => {
            this.tang()
          }}
        />
        <Button
          title={`Giảm ${this.props.mau}`}
          onPress={() => {
            this.giam()
          }}
        />
      </View>
    )
  }
}

export default connect()(NutBamBiRong)
