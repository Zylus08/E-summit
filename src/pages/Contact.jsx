import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <View style={styles.container}>
            <Header title="Contact Us" />
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.heading}>Get in Touch</Text>
                    <Text style={styles.text}>
                        Have questions about E-SUMMIT'26? We're here to help!
                    </Text>
                </View>

                <View style={styles.infoCard}>
                    <View style={styles.row}>
                        <Mail size={20} color={COLORS.primaryAccent} />
                        <Text style={styles.infoText}>contact@esummit.com</Text>
                    </View>
                    <View style={styles.row}>
                        <Phone size={20} color={COLORS.primaryAccent} />
                        <Text style={styles.infoText}>+91 98765 43210</Text>
                    </View>
                    <View style={styles.row}>
                        <MapPin size={20} color={COLORS.primaryAccent} />
                        <Text style={styles.infoText}>Innovation Center, Tech Valley</Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <Text style={styles.formTitle}>Send us a message</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Your Name"
                        placeholderTextColor={COLORS.supportBlue}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Subject"
                        placeholderTextColor={COLORS.supportBlue}
                    />
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Message"
                        placeholderTextColor={COLORS.supportBlue}
                        multiline
                        numberOfLines={4}
                    />
                    <Button variant="primary" fullWidth>Send Message</Button>
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
        paddingBottom: 100,
    },
    section: {
        marginBottom: SPACING.xl,
    },
    heading: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFF',
        fontFamily: FONTS.heading,
        marginBottom: SPACING.sm,
    },
    text: {
        color: COLORS.supportBlue,
        fontSize: 16,
        fontFamily: FONTS.body,
    },
    infoCard: {
        backgroundColor: 'rgba(2, 48, 71, 0.5)',
        padding: SPACING.lg,
        borderRadius: RADIUS.md,
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.1)',
        marginBottom: SPACING.xl,
        gap: SPACING.md,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
    },
    infoText: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: FONTS.body,
    },
    form: {
        gap: SPACING.md,
    },
    formTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFF',
        marginBottom: SPACING.sm,
        fontFamily: FONTS.heading,
    },
    input: {
        backgroundColor: COLORS.darkContrast,
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.2)',
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        color: '#FFF',
        fontFamily: FONTS.body,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
});

export default Contact;
