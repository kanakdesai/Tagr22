import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const Pay = () => {
  return (
    
      <WebView
         source={{ uri: "https://fastagpro.com/recharge" }}
         cacheEnabled={false}
    />
    
  )
}

export default Pay

const styles = StyleSheet.create({})