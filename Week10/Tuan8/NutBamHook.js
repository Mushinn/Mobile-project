import { View, Button, StyleSheet } from "react-native"
import React from "react"
import { connect, useDispatch } from "react-redux"

const NutBamHook = () => {
  const dispatch = useDispatch()
  return (
    <View>
      <Button
        title="Tăng nhiệt độ"
        onPress={() => dispatch({ type: "TangNhietDo" })}
      ></Button>
      <Button
        title="Giảm nhiệt độ"
        onPress={() => dispatch({ type: "GiamNhietDo" })}
      ></Button>
      <Button
        title="Tăng độ ẩm"
        onPress={() => dispatch({ type: "TangDoAm" })}
      ></Button>
      <Button
        title="Giảm độ ẩm"
        onPress={() => dispatch({ type: "GiamDoAm" })}
      ></Button>
    </View>
  )
}

export default connect()(NutBamHook)
