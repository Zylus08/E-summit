import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

const IFPortal = () => {
    return (
        <View style={styles.container}>
            <Header title="IF Portal" />
            <View style={styles.content}>
                <View style={styles.frame}>
                    <View style={styles.placeholder}>
                        <Text style={styles.title}>Innovation & Fundraising Portal</Text>
                        <Text style={styles.text}>Access exclusive resources and timeline.</Text>

                        <View style={styles.timeline}>
                            <View style={[styles.item, styles.activeItem]}>
                                <View style={[styles.dot, styles.activeDot]} />
                                <Text style={[styles.itemText, styles.activeText]}>Registration Open</Text>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.dot} />
                                <Text style={styles.itemText}>Round 1 Submission</Text>
                            </View>
                            <View style={styles.item}>
                                <View style={styles.dot} />
                                <Text style={styles.itemText}>Final Pitch</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgDark,
    },
    content: {
        flex: 1,
        padding: SPACING.md,
        paddingBottom: 100,
    },
    frame: {
        backgroundColor: '#FFF',
        flex: 1,
        borderRadius: RADIUS.md,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholder: {
        alignItems: 'center',
        padding: SPACING.xl,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.bgDark,
        marginBottom: SPACING.sm,
        textAlign: 'center',
        fontFamily: FONTS.heading,
    },
    text: {
        color: '#666',
        marginBottom: SPACING.xl,
        textAlign: 'center',
        fontFamily: FONTS.body,
    },
    timeline: {
        alignSelf: 'stretch',
        paddingHorizontal: SPACING.xl,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        marginBottom: SPACING.md,
        opacity: 0.5,
    },
    activeItem: {
        opacity: 1,
    },
    dot: {
        width: 10,
        height: 10,
        backgroundColor: '#666',
        borderRadius: 5,
    },
    activeDot: {
        backgroundColor: COLORS.primaryAccent,
    },
    itemText: {
        color: '#666',
        fontSize: 14,
        fontFamily: FONTS.body,
    },
    activeText: {
        color: COLORS.primaryAccent,
        fontWeight: '700',
    },
});

export default IFPortal;
