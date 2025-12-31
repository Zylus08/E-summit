import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowRight, Zap } from 'lucide-react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import Menu from '../components/Menu';
import { useAuth } from '../context/AuthContext';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

// Mock data since we don't have the data file ported yet, or we can import it if we copy it.
// For now, I'll mock it to be safe.
const events = [
    {
        id: 1,
        title: "Keynote: The Future of AI",
        date: "March 12, 10:00 AM",
        location: "Main Auditorium",
        category: "Keynote",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop",
        description: "Join us for an inspiring keynote session on how Artificial Intelligence is reshaping the entrepreneurial landscape."
    },
    {
        id: 2,
        title: "Startup Pitch Battle",
        date: "March 12, 02:00 PM",
        location: "Innovation Hall",
        category: "Competition",
        image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=1000&auto=format&fit=crop",
        description: "Witness the most promising startups pitch their ideas to a panel of top investors."
    }
];

const EventCard = ({ title, date, location, category, onPress }) => (
    <View style={styles.eventCard}>
        <View style={styles.eventContent}>
            <View style={styles.eventHeader}>
                <Text style={styles.eventCategory}>{category}</Text>
                <Text style={styles.eventDate}>{date}</Text>
            </View>
            <Text style={styles.eventTitle}>{title}</Text>
            <Text style={styles.eventLocation}>{location}</Text>
            <Button variant="ghost" onPress={onPress} style={{ marginTop: SPACING.sm, height: 40 }}>
                View Details
            </Button>
        </View>
    </View>
);

const HomeScreen = () => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Dashboard" showMenu onMenuPress={() => setMenuVisible(true)} />
            <Menu visible={menuVisible} onClose={() => setMenuVisible(false)} />

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.heroSection}>
                    <Text style={styles.sectionTitle}>
                        Welcome Back, <Text style={styles.textBrand}>{user?.name || 'Innovator'}</Text>
                    </Text>
                    <View style={styles.heroCard}>
                        <View style={styles.heroContent}>
                            <Text style={styles.heroTitle}>E-SUMMIT'26 is Live</Text>
                            <Text style={styles.heroText}>Join the revolution of entrepreneurship.</Text>
                            <Button variant="primary" onPress={() => navigation.navigate('Live')}>
                                Join Live Stream <Zap size={16} color="#FFF" />
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={styles.upcomingSection}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.subHeader}>Upcoming Events</Text>
                        <Text style={styles.seeAll} onPress={() => navigation.navigate('Events')}>See All</Text>
                    </View>
                    <View style={styles.list}>
                        {events.slice(0, 2).map(event => (
                            <EventCard
                                key={event.id}
                                {...event}
                                onPress={() => navigation.navigate('EventDetail', { id: event.id })}
                            />
                        ))}
                    </View>
                </View>

                <View style={styles.quickActions}>
                    <Button variant="secondary" fullWidth icon={ArrowRight} onPress={() => navigation.navigate('Tickets')}>
                        My Tickets
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
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
    eventCard: {
        backgroundColor: COLORS.darkContrast,
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.1)',
    },
    eventHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.sm,
    },
    eventCategory: {
        color: COLORS.primaryAccent,
        fontSize: 12,
        fontWeight: '600',
    },
    eventDate: {
        color: COLORS.supportBlue,
        fontSize: 12,
    },
    eventTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: SPACING.xs,
    },
    eventLocation: {
        color: COLORS.supportBlue,
        fontSize: 12,
        marginBottom: SPACING.sm,
    },
});

export default HomeScreen;
