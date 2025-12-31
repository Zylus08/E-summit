import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import Button from '../components/Button';
import { ArrowRight, Zap } from 'lucide-react';
import { events } from '../data';
import { useNavigate } from 'react-router-dom';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Header title="Dashboard" showMenu />

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.heroSection}>
                    <Text style={styles.sectionTitle}>
                        Welcome Back, <Text style={styles.textBrand}>{user?.name || 'Innovator'}</Text>
                    </Text>
                    <View style={styles.heroCard}>
                        <View style={styles.heroContent}>
                            <Text style={styles.heroTitle}>E-SUMMIT'26 is Live</Text>
                            <Text style={styles.heroText}>Join the revolution of entrepreneurship.</Text>
                            <Button variant="primary" onPress={() => navigate('/live')}>
                                Join Live Stream <Zap size={16} color="#FFF" />
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={styles.upcomingSection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.subHeader}>Upcoming Events</Text>
                        <Text style={styles.seeAll} onPress={() => navigate('/events')}>See All</Text>
                    </View>
                    <View style={styles.list}>
                        {events.slice(0, 2).map(event => (
                            <EventCard
                                key={event.id}
                                {...event}
                                onPress={() => navigate(`/events/${event.id}`)}
                            />
                        ))}
                    </View>
                </View>

                <View style={styles.quickActions}>
                    <Button variant="secondary" fullWidth icon={ArrowRight} onPress={() => navigate('/tickets')}>
                        My Tickets
                    </Button>
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
        paddingBottom: 100, // Space for bottom nav
    },
    sectionTitle: {
        fontFamily: FONTS.heading,
        fontSize: 24,
        fontWeight: '700',
        color: '#FFF',
        marginBottom: SPACING.md,
    },
    textBrand: {
        color: COLORS.brandBlue,
    },
    heroCard: {
        backgroundColor: COLORS.darkContrast,
        borderRadius: RADIUS.md,
        padding: SPACING.lg,
        marginBottom: SPACING.xl,
        borderWidth: 1,
        borderColor: COLORS.brandBlue,
        overflow: 'hidden',
    },
    heroContent: {
        zIndex: 1,
    },
    heroTitle: {
        fontFamily: FONTS.heading,
        fontSize: 20,
        fontWeight: '700',
        color: '#FFF',
        marginBottom: SPACING.sm,
    },
    heroText: {
        fontFamily: FONTS.body,
        fontSize: 14,
        color: COLORS.supportBlue,
        marginBottom: SPACING.md,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.md,
    },
    subHeader: {
        fontFamily: FONTS.heading,
        fontSize: 18,
        fontWeight: '700',
        color: '#FFF',
    },
    seeAll: {
        fontFamily: FONTS.body,
        fontSize: 14,
        color: COLORS.brandBlue,
    },
    list: {
        gap: SPACING.md,
    },
    quickActions: {
        marginTop: SPACING.lg,
    },
});

export default Home;
