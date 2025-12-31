import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { User, Mail, Phone, LogOut, Settings } from 'lucide-react';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Header title="Profile" />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <View style={styles.avatar}>
                        <User size={40} color="#FFF" />
                    </View>
                    <Text style={styles.name}>Alex Innovator</Text>
                    <Text style={styles.role}>Startup Enthusiast</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contact Info</Text>
                    <View style={styles.infoRow}>
                        <Mail size={20} color={COLORS.supportBlue} />
                        <Text style={styles.infoText}>alex@example.com</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Phone size={20} color={COLORS.supportBlue} />
                        <Text style={styles.infoText}>+1 234 567 890</Text>
                    </View>
                </View>

                <View style={styles.actions}>
                    <Button variant="secondary" fullWidth icon={Settings}>Settings</Button>
                    <Button variant="ghost" fullWidth icon={LogOut}>Logout</Button>
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
        padding: SPACING.md,
        paddingBottom: 100,
    },
    header: {
        alignItems: 'center',
        marginBottom: SPACING.xl,
        padding: SPACING.lg,
        backgroundColor: 'rgba(2, 48, 71, 0.3)',
        borderRadius: RADIUS.md,
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.1)',
    },
    avatar: {
        width: 80,
        height: 80,
        backgroundColor: COLORS.brandBlue,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SPACING.md,
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFF',
        fontFamily: FONTS.heading,
        marginBottom: 4,
    },
    role: {
        fontSize: 14,
        color: COLORS.supportBlue,
        fontFamily: FONTS.body,
    },
    section: {
        marginBottom: SPACING.xl,
    },
    sectionTitle: {
        color: COLORS.secondaryAccent,
        marginBottom: SPACING.md,
        fontSize: 16,
        fontFamily: FONTS.heading,
        fontWeight: '600',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        padding: SPACING.md,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        marginBottom: SPACING.sm,
        borderRadius: RADIUS.sm,
    },
    infoText: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: FONTS.body,
    },
    actions: {
        gap: SPACING.md,
    },
});

export default Profile;
