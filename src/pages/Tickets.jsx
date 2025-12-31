import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { Download, Share2, QrCode } from 'lucide-react';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

const Tickets = () => {
    return (
        <View style={styles.container}>
            <Header title="My Tickets" />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.headerTitle}>E-SUMMIT'26</Text>
                        <View style={styles.typeBadge}>
                            <Text style={styles.typeText}>ALL ACCESS</Text>
                        </View>
                    </View>

                    <View style={styles.cardBody}>
                        <View style={styles.qrContainer}>
                            <QrCode size={120} color={COLORS.darkContrast} />
                        </View>

                        <View style={styles.details}>
                            <View style={styles.row}>
                                <Text style={styles.label}>Date</Text>
                                <Text style={styles.value}>March 12-14, 2026</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Venue</Text>
                                <Text style={styles.value}>Convention Center</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.label}>Holder</Text>
                                <Text style={styles.value}>Alex Innovator</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.cardFooter}>
                        <Button variant="ghost" icon={Download} style={styles.footerBtn}>Download</Button>
                        <Button variant="ghost" icon={Share2} style={styles.footerBtn}>Share</Button>
                    </View>

                    {/* Cutout circles */}
                    <View style={[styles.cutout, styles.cutoutLeft]} />
                    <View style={[styles.cutout, styles.cutoutRight]} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgDark,
    },
    content: {
        padding: SPACING.lg,
        alignItems: 'center',
        paddingBottom: 100,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: RADIUS.lg,
        width: '100%',
        maxWidth: 340,
        overflow: 'hidden',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
    cardHeader: {
        backgroundColor: COLORS.primaryAccent,
        padding: SPACING.md,
        alignItems: 'center',
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
        fontFamily: FONTS.heading,
        marginBottom: 4,
    },
    typeBadge: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    typeText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 1,
    },
    cardBody: {
        padding: SPACING.lg,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#CCC',
        borderStyle: 'dashed', // RN supports dashed border style
    },
    qrContainer: {
        marginBottom: SPACING.lg,
    },
    details: {
        width: '100%',
        gap: SPACING.sm,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        color: '#666',
        fontSize: 14,
        fontFamily: FONTS.body,
    },
    value: {
        color: COLORS.bgDark,
        fontSize: 14,
        fontWeight: '600',
        fontFamily: FONTS.body,
    },
    cardFooter: {
        padding: SPACING.md,
        flexDirection: 'row',
        gap: SPACING.md,
    },
    footerBtn: {
        flex: 1,
        borderColor: '#EEE',
    },
    cutout: {
        position: 'absolute',
        top: '65%', // Approximate position
        width: 20,
        height: 20,
        backgroundColor: COLORS.bgDark,
        borderRadius: 10,
    },
    cutoutLeft: {
        left: -10,
    },
    cutoutRight: {
        right: -10,
    },
});

export default Tickets;
