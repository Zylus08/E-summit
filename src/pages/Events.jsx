import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import { events } from '../data';
import { useNavigate } from 'react-router-dom';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

const Events = () => {
    const navigate = useNavigate();

    const renderItem = ({ item }) => (
        <EventCard
            {...item}
            onPress={() => navigate(`/events/${item.id}`)}
        />
    );

    return (
        <View style={styles.container}>
            <Header title="Schedule" />
            <View style={styles.content}>
                <View style={styles.filterContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
                        <TouchableOpacity style={[styles.chip, styles.chipActive]}>
                            <Text style={[styles.chipText, styles.chipTextActive]}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chip}>
                            <Text style={styles.chipText}>Keynotes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.chip}>
                            <Text style={styles.chipText}>Workshops</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <FlatList
                    data={events}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
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
    },
    filterContainer: {
        height: 50,
        marginBottom: SPACING.sm,
    },
    filterScroll: {
        paddingHorizontal: SPACING.md,
        alignItems: 'center',
        gap: SPACING.sm,
    },
    chip: {
        backgroundColor: 'rgba(2, 48, 71, 0.5)',
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.2)',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: RADIUS.full,
    },
    chipActive: {
        backgroundColor: COLORS.brandBlue,
        borderColor: COLORS.brandBlue,
    },
    chipText: {
        color: COLORS.supportBlue,
        fontSize: 12,
        fontFamily: FONTS.body,
    },
    chipTextActive: {
        color: '#FFF',
        fontWeight: '600',
    },
    listContent: {
        padding: SPACING.md,
        paddingBottom: 100,
    },
});

export default Events;
