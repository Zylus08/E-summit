import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import SpeakerCard from '../components/SpeakerCard';
import { speakers } from '../data';
import { COLORS, SPACING } from '../theme';

const Speakers = () => {
    return (
        <View style={styles.container}>
            <Header title="Speakers" />
            <FlatList
                data={speakers}
                renderItem={({ item }) => <SpeakerCard {...item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgDark,
    },
    list: {
        padding: SPACING.md,
        paddingBottom: 100,
    },
    row: {
        gap: SPACING.md,
        marginBottom: SPACING.md,
    },
});

export default Speakers;
