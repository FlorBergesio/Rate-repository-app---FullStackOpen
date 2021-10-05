import React from "react";
import { StyleSheet, View } from 'react-native';
import { Link } from "react-router-native";
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primaryLight,
        padding: 10,
    },
    text: {
        color: "white"
    }
});

const AppBarTab = ( { title, path } ) => {
    return (
        <Link to={ path }>
            <View style={styles.container}>
                <Text style={styles.text} fontWeight="bold">{ title }</Text>
            </View>
        </Link>
    );
};

export default AppBarTab;
