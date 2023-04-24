import { Text, View, StyleSheet } from "react-native"
import React from "react"
import { connect, useSelector } from "react-redux"

const NhietDoHook = () => {
  const nhietDo = useSelector((state) => state.nhietDo)
  const doAm = useSelector((state) => state.doAm)
  console.log(nhietDo, doAm)
  return (
    <View>
      <Text style={styles.nhietDo}>Nhiệt độ: {nhietDo}</Text>
      <Text style={styles.nhietDo}>Độ ẩm: {doAm}</Text>
    </View>
  )
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

export default connect()(NhietDoHook)
