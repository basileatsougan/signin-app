import { View, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title }) => {
  return (
    <View style={{ backgroundColor: "#000", borderRadius: 8, marginTop: 40, marginHorizontal: 40, height: 70, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#fff", fontSize: 22, }}>{title}</Text>
    </View>
  )
}

export default CustomButton