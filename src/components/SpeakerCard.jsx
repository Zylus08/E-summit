import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Linkedin } from 'lucide-react';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

const SpeakerCard = ({ name, role, company, image }) => {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.iconBadge}>
                    <Linkedin size={16} color="#FFF" />
                </View>
            </View>

            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={1}>{name}</Text>
                <Text style={styles.role} numberOfLines={1}>{role}</Text>
                <Text style={styles.company} numberOfLines={1}>{company}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(2, 48, 71, 0.5)',
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.1)',
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        alignItems: 'center',
        flex: 1,
    },
    imageContainer: {
        width: 80,
        height: 80,
        marginBottom: SPACING.sm,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: COLORS.brandBlue,
    },
    iconBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.brandBlue,
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: COLORS.bgCard,
    },
    info: {
        alignItems: 'center',
        width: '100%',
    },
    name: {
        fontFamily: FONTS.heading,
        fontSize: 16,
        fontWeight: '700',
        color: '#FFF',
        marginBottom: 4,
    },
    role: {
        fontFamily: FONTS.body,
        fontSize: 12,
        color: COLORS.secondaryAccent,
        fontWeight: '500',
        marginBottom: 2,
    },
    company: {
        fontFamily: FONTS.body,
        fontSize: 12,
        color: COLORS.supportBlue,
        opacity: 0.8,
    },
});

export default SpeakerCard;
