import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Bell, Menu as MenuIcon } from 'lucide-react';
import { COLORS, FONTS, SPACING } from '../theme';
import Menu from './Menu';

const Header = ({ title, showMenu = false }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <View style={styles.header}>
                <View style={styles.left}>
                    {showMenu && (
                        <TouchableOpacity onPress={() => setMenuVisible(true)}>
                            <MenuIcon size={24} color={COLORS.supportBlue} style={styles.icon} />
                        </TouchableOpacity>
                    )}
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.right}>
                    <View style={styles.badgeContainer}>
                        <Bell size={24} color={COLORS.supportBlue} />
                        <View style={styles.dot} />
                    </View>
                </View>
            </View>
            <Menu visible={menuVisible} onClose={() => setMenuVisible(false)} />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.md,
        backgroundColor: 'rgba(1, 22, 39, 0.8)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(142, 202, 230, 0.05)',
        zIndex: 900,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
    },
    title: {
        fontFamily: FONTS.heading,
        fontSize: 20,
        fontWeight: '700',
        color: '#FFF',
        letterSpacing: -0.5,
    },
    icon: {
        marginRight: SPACING.sm,
    },
    badgeContainer: {
        position: 'relative',
    },
    dot: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 8,
        height: 8,
        backgroundColor: COLORS.primaryAccent,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: COLORS.bgDark,
    },
});

export default Header;
