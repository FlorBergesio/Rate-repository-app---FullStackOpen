import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
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

const AppBarTab = ( { title } ) => {
    return (
        <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.container}>
                <Text style={styles.text} fontWeight="bold">{ title }</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AppBarTab;
