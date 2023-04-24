import { View, Button } from "react-native"
import React from "react"
import { useDispatch, connect } from "react-redux"

const NutBamBiRongHook = (props) => {
  const dispatch = useDispatch()
  return (
    <View>
      <Button
        title={`Tăng ${props.mau}`}
        onPress={() => {
          if (props.mau === "Đỏ") dispatch({ type: "TangDo" })
          if (props.mau === "Xanh Lá") dispatch({ type: "TangXanhLa" })
          if (props.mau === "Xanh Dương") dispatch({ type: "TangXanhDuong" })
        }}
      />
      <Button
        title={`Giảm ${props.mau}`}
        onPress={() => {
          if (props.mau === "Đỏ") dispatch({ type: "GiamDo" })
          if (props.mau === "Xanh Lá") dispatch({ type: "GiamXanhLa" })
          if (props.mau === "Xanh Dương") dispatch({ type: "GiamXanhDuong" })
        }}
      />
    </View>
  )
}

export default connect()(NutBamBiRongHook)
