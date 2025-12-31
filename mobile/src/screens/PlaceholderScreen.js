import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../theme';

const PlaceholderScreen = ({ route }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{route.name} Screen</Text>
            <Text style={styles.subtext}>Coming Soon</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgDark,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFF',
        fontFamily: FONTS.heading,
        fontSize: 24,
        fontWeight: '700',
    },
    subtext: {
        color: COLORS.supportBlue,
        fontFamily: FONTS.body,
        fontSize: 16,
        marginTop: 8,
    },
});

export default PlaceholderScreen;
