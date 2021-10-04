import React from 'react';
import { View, Image, StyleSheet  } from 'react-native';
import Text from './Text';
import RepositoryItemStats from './RepositoryItemStats';
import theme from '../theme';

const RepositoryItem = ( { item } ) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.row }> 
                <Image
                    style={ styles.image }
                    source={ {
                        uri: item.ownerAvatarUrl,
                    } }
                />
                <View style={ styles.details }>
                    <Text fontWeight="bold" fontSize="subheading">{ item.fullName }</Text>
                    <Text color="textSecondary">{ item.description }</Text>
                    <View style={ styles.language }>
                        <Text style={ styles.languageText } fontWeight="bold">{ item.language }</Text>
                    </View>
                    
                </View>
            </View>

            

            <View style={ styles.stats }>
                <RepositoryItemStats
                    title="Stars"
                    value={ item.stargazersCount }
                />
                <RepositoryItemStats
                    title="Forks"
                    value={ item.forksCount }
                />
                <RepositoryItemStats
                    title="Reviews"
                    value={ item.reviewCount }
                />
                <RepositoryItemStats
                    title="Rating"
                    value={ item.ratingAverage }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 10
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10
    },
    details: {
        display: "flex",
        justifyContent: "space-between"
    },
    language: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    languageText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: theme.colors.primary,
        color: "white"
    },
    stats: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});

export default RepositoryItem;
