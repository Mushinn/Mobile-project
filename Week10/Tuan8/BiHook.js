import { View, StyleSheet } from "react-native"
import React from "react"
import { connect, useSelector } from "react-redux"

const BiHook = () => {
  const mauDo = useSelector((state) => state.do)
  let mauXanhLa = useSelector((state) => state.xanhLa)
  let mauXanhDuong = useSelector((state) => state.xanhDuong)
  return (
    <View
      style={{
        ...styles.bi,
        backgroundColor: `rgb(${mauDo}, ${mauXanhLa}, ${mauXanhDuong})`,
      }}
    ></View>
  )
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

export default connect()(BiHook)
