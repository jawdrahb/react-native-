import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View 
        style={{
          backgroundColor: 'red',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>    
      <View 
        style={{
          backgroundColor: 'blue',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>    
      <View 
        style={{
          backgroundColor: 'green',
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50, 
    flexDirection: 'row', 
    width: '80%', 
    height: 300, 
    justifyContent: 'space-around', 
    alignItems: 'stretch'
  }
});
