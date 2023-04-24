import { View, StyleSheet } from "react-native"
import React, { Component } from "react"
import NhietDo from "./NhietDo"
import NutBam from "./NutBam"
import Bi from "./Bi"
import NutBamBiRong from "./NutBamBiRong"
import BiHook from "./BiHook"
import NutBamBiRongHook from "./NutBamBiRongHook"
import NhietDoHook from "./NhietDoHook"
import NutBamHook from "./NutBamHook"

export class ManHinhChinh extends Component {
  render() {
    return (
      <View style={styles.container}>
       {/*<NhietDo />
        <NutBam /> */}
         <NhietDoHook />
        <NutBamHook /> 
         {/* <Bi />
        <NutBamBiRong mau="Đỏ" />
        <NutBamBiRong mau="Xanh Lá" />
        <NutBamBiRong mau="Xanh Dương" />*/} 
      { /* <BiHook />
        <NutBamBiRongHook mau="Đỏ" />
        <NutBamBiRongHook mau="Xanh Lá" />
        <NutBamBiRongHook mau="Xanh Dương" />*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
})

export default ManHinhChinh
