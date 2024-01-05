import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constents/colors';
import Header from '../../components/Header';

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.text}>
        <Text style={styles.chatText}>Chat</Text> Room
      </Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatText: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.green,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.black,
  },
});
