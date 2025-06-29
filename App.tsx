//import { Text, View,SafeAreaView, TouchableOpacity, Alert, StyleSheet, Pressable } from 'react-native';
import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <ScrollView contentContainerStyle={{gap:10}} horizontal style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>


      {/* <Text style={styles.text}>Hello Rohan Singh</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Pressed!!')}
      >
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
      <Pressable style={{padding:10,backgroundColor:"yellow"}}>
        <Text>Press Me</Text>
      </Pressable> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding:10,
    // flexDirection:"row",
    // justifyContent:"center",
    // alignItems:"center",
    // justifyContent: 'center', // Vertically center content
    // alignItems: 'center', // Horizontally center content
    // paddingTop: 20, // Add space from top if needed
  },
  box1:{
    // flex:1,
    width:80,
    height:80,
    backgroundColor:'red',
    borderRadius:50,
  },
  box2:{
    // flex:2,
    width:80,
    height:80,
    backgroundColor:'yellow',
    borderRadius:50,
  },
  box3:{
    // flex:3,
    width:80,
    height:80,
    backgroundColor:'blue',
    borderRadius:50,
  },

  text: {
    fontSize: 20,
    marginBottom: 20, // Space between text and button
  },
  button: {
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5, // Optional: To make button corners rounded
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
