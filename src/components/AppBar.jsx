import React from "react";
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.primary,
        flexDirection: "row"
    },
});

const AppBar = () => {


    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab title="Repositories" path="/" />
                <AppBarTab title="Sign In" path="/signin" />
            </ScrollView>
        </View>
    );
};

export default AppBar;
