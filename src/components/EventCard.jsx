import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

const EventCard = ({ title, date, location, image, category, onClick, onPress }) => {
    const handlePress = onPress || onClick;

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress} activeOpacity={0.9}>
            <ImageBackground source={{ uri: image }} style={styles.image} imageStyle={styles.imageStyle}>
                <View style={styles.overlay} />
                <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{category}</Text>
                </View>
            </ImageBackground>

            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>

                <View style={styles.metaContainer}>
                    <View style={styles.metaItem}>
                        <Calendar size={14} color={COLORS.supportBlue} />
                        <Text style={styles.metaText}>{date}</Text>
                    </View>
                    <View style={styles.metaItem}>
                        <MapPin size={14} color={COLORS.supportBlue} />
                        <Text style={styles.metaText}>{location}</Text>
                    </View>
                </View>

                <View style={styles.actionRow}>
                    <Text style={styles.actionText}>View Details</Text>
                    <ArrowRight size={16} color={COLORS.primaryAccent} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.bgCard,
        borderRadius: RADIUS.md,
        marginBottom: SPACING.md,
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.1)',
        overflow: 'hidden',
    },
    image: {
        height: 140,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        padding: SPACING.sm,
    },
    imageStyle: {
        borderTopLeftRadius: RADIUS.md,
        borderTopRightRadius: RADIUS.md,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(2, 48, 71, 0.4)',
    },
    categoryBadge: {
        backgroundColor: 'rgba(33, 158, 188, 0.9)',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    categoryText: {
        color: '#FFF',
        fontSize: 10,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    content: {
        padding: SPACING.md,
        paddingTop: SPACING.sm,
    },
    title: {
        fontFamily: FONTS.heading,
        fontSize: 18,
        fontWeight: '700',
        color: '#FFF',
        marginBottom: SPACING.sm,
    },
    metaContainer: {
        flexDirection: 'row',
        gap: SPACING.md,
        marginBottom: SPACING.md,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    metaText: {
        color: COLORS.supportBlue,
        fontSize: 12,
        fontFamily: FONTS.body,
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.05)',
        paddingTop: SPACING.sm,
    },
    actionText: {
        color: COLORS.primaryAccent,
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
});

export default EventCard;
