import { StyleSheet, Text, View, Image, SafeAreaView, LogBox, TouchableOpacity } from 'react-native';
import Header from './components/Header1';
import AlertFunction from './components/Alert';
import NavBar from './components/NavBar';
import Body1 from './components/body1';
import Body2 from './components/body2';
import React from 'react';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body1 />
      <Body2 />
      <AlertFunction />
      <NavBar />
    </SafeAreaView>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});

