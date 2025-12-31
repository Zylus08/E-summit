import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { NavLink } from 'react-router-dom';
import { Calendar, Radio, Users, Ticket, User } from 'lucide-react';
import { COLORS, FONTS, SPACING, LAYOUT } from '../theme';

// Wrapper to make NavLink work like a Touchable
const NavItem = ({ to, icon: Icon, label }) => {
    return (
        <NavLink to={to} style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
                <View style={styles.navItem}>
                    <Icon size={24} color={isActive ? COLORS.secondaryAccent : COLORS.supportBlue} />
                    <Text style={[
                        styles.navText,
                        { color: isActive ? COLORS.secondaryAccent : COLORS.supportBlue }
                    ]}>
                        {label}
                    </Text>
                </View>
            )}
        </NavLink>
    );
};

const BottomNav = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <NavItem to="/events" icon={Calendar} label="Events" />
                <NavItem to="/live" icon={Radio} label="Live" />
                <NavItem to="/speakers" icon={Users} label="Speakers" />
                <NavItem to="/tickets" icon={Ticket} label="Tickets" />
                <NavItem to="/profile" icon={User} label="Profile" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'fixed', // Web only, for RN native you'd use absolute positioning or a layout wrapper
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 1000,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        maxWidth: LAYOUT.maxWidth,
        height: 70,
        backgroundColor: 'rgba(2, 48, 71, 0.95)',
        borderTopWidth: 1,
        borderTopColor: 'rgba(142, 202, 230, 0.1)',
        paddingBottom: Platform.OS === 'ios' ? 20 : 0, // Safe area placeholder
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        gap: 4,
    },
    navText: {
        fontFamily: FONTS.heading,
        fontSize: 10,
        fontWeight: '500',
        letterSpacing: 0.5,
    },
});

export default BottomNav;
