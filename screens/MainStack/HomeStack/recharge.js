import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
const Recharge = () => {
    return (
    
        <WebView
           source={{ uri: "https://fastagpro.com/recharge" }}
           cacheEnabled={false}
      />
      
    )
}

export default Recharge

const styles = StyleSheet.create({})