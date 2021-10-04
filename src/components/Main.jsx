import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text fontWeight="bold" fontSize="subheading">Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;