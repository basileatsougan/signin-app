import { View, Text, Image } from 'react-native'
import React from 'react'

const SquareTile = ({ imagePath }) => {
  return (
    <View style={{ width: 60, height: 60, backgroundColor: "#f1f2f0", borderRadius: 13, alignItems: "center", justifyContent: "center" }}>
      <Image 
        source={ imagePath }
        style={{ width: 50, height: 50, backgroundColor: "#d9d9d9" }}
      />
    </View>
  )
}

export default SquareTile