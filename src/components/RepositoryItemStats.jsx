import React, { useEffect, useState } from 'react';
import { View, StyleSheet  } from 'react-native';
import Text from './Text';

const round = (value, precision) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};

const RepositoryItemStats = ( { title, value } ) => {
    const [ formattedValue, setFormattedValue ] = useState( value );

    useEffect( () => {
        if ( value > 1000 ) {
            setFormattedValue(`${ round((value/1000), 1)}k`);
        }
    }, [] );

    return (
        <View style={ styles.container }>
            <Text style={ styles.text } fontWeight="bold" fontSize="subheading">{ formattedValue }</Text>
            <Text style={ styles.text } color="textSecondary">{ title }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignContent: "space-between"
    },
    text: {
        textAlign: "center"
    }
});

export default RepositoryItemStats;
