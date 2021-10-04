import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading">Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;