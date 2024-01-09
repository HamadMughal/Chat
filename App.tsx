import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Splash} from './src/screens/Index';
import NavigationHandler from './src/navigation/NavigationHandler';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <NavigationHandler />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
