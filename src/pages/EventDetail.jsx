import React from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Bell, CalendarPlus } from 'lucide-react';
import Button from '../components/Button';
import { events } from '../data';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

const EventDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = events.find(e => e.id === parseInt(id));

    if (!event) return <View><Text>Event not found</Text></View>;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <ImageBackground source={{ uri: event.image }} style={styles.hero}>
                    <View style={styles.overlay}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigate(-1)}>
                            <ArrowLeft size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{event.category}</Text>
                        </View>
                        <Text style={styles.title}>{event.title}</Text>
                    </View>

                    <View style={styles.infoGrid}>
                        <View style={styles.infoItem}>
                            <Calendar size={20} color={COLORS.brandBlue} />
                            <View>
                                <Text style={styles.label}>Date & Time</Text>
                                <Text style={styles.value}>{event.date}</Text>
                            </View>
                        </View>
                        <View style={styles.infoItem}>
                            <MapPin size={20} color={COLORS.brandBlue} />
                            <View>
                                <Text style={styles.label}>Location</Text>
                                <Text style={styles.value}>{event.location}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.description}>
                        <Text style={styles.descTitle}>About Event</Text>
                        <Text style={styles.descText}>{event.description}</Text>
                    </View>

                    <View style={styles.actions}>
                        <Button variant="primary" fullWidth>Register Now</Button>
                        <View style={styles.secondaryActions}>
                            <Button variant="ghost" icon={CalendarPlus} style={{ flex: 1 }}>Add to Calendar</Button>
                            <Button variant="ghost" icon={Bell} style={{ flex: 1 }}>Notify Me</Button>
                        </View>
                    </View>
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
    scrollContent: {
        paddingBottom: 100,
    },
    hero: {
        height: 250,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: SPACING.md,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        padding: SPACING.lg,
        marginTop: -20,
        backgroundColor: COLORS.bgDark,
        borderTopLeftRadius: RADIUS.lg,
        borderTopRightRadius: RADIUS.lg,
    },
    header: {
        marginBottom: SPACING.lg,
    },
    badge: {
        backgroundColor: COLORS.secondaryAccent,
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: RADIUS.full,
        alignSelf: 'flex-start',
        marginBottom: SPACING.sm,
    },
    badgeText: {
        color: COLORS.bgDark,
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    title: {
        fontFamily: FONTS.heading,
        fontSize: 28,
        fontWeight: '700',
        color: '#FFF',
    },
    infoGrid: {
        backgroundColor: 'rgba(2, 48, 71, 0.3)',
        padding: SPACING.md,
        borderRadius: RADIUS.md,
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.1)',
        gap: SPACING.md,
        marginBottom: SPACING.xl,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
    },
    label: {
        fontSize: 12,
        color: COLORS.supportBlue,
        fontFamily: FONTS.body,
    },
    value: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FFF',
        fontFamily: FONTS.body,
    },
    description: {
        marginBottom: SPACING.xl,
    },
    descTitle: {
        fontSize: 18,
        color: COLORS.secondaryAccent,
        marginBottom: SPACING.sm,
        fontFamily: FONTS.heading,
        fontWeight: '600',
    },
    descText: {
        color: COLORS.supportBlue,
        lineHeight: 24,
        fontFamily: FONTS.body,
    },
    actions: {
        gap: SPACING.md,
    },
    secondaryActions: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
});

export default EventDetail;
