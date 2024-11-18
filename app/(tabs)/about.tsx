import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function About(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#25292e",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
        color: "#fff",
    }
})