import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { X, Briefcase, Mail, Home, LogOut } from 'lucide-react-native';
import { useAuth } from '../context/AuthContext';
import { COLORS, FONTS, SPACING, RADIUS } from '../theme';

const Menu = ({ visible, onClose }) => {
    const navigation = useNavigation();
    const { logout } = useAuth();

    const handleNavigate = (screen) => {
        onClose();
        navigation.navigate(screen);
    };

    const handleLogout = () => {
        logout();
        onClose();
        // Assuming AuthNavigator handles redirect to Login on logout
    };

    if (!visible) return null;

    return (
        <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.backdrop} onPress={onClose} />
                <View style={styles.drawer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Menu</Text>
                        <TouchableOpacity onPress={onClose}>
                            <X size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.items}>
                        <TouchableOpacity style={styles.item} onPress={() => handleNavigate('Home')}>
                            <Home size={20} color={COLORS.primaryAccent} />
                            <Text style={styles.itemText}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item} onPress={() => handleNavigate('IFPortal')}>
                            <Briefcase size={20} color={COLORS.primaryAccent} />
                            <Text style={styles.itemText}>Internship Fair</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item} onPress={() => handleNavigate('Contact')}>
                            <Mail size={20} color={COLORS.primaryAccent} />
                            <Text style={styles.itemText}>Contact Us</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
                            <LogOut size={20} color={COLORS.supportBlue} />
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
    },
    backdrop: {
        flex: 1,
    },
    drawer: {
        width: '80%',
        maxWidth: 300,
        backgroundColor: COLORS.bgDark,
        height: '100%',
        padding: SPACING.lg,
        borderRightWidth: 1,
        borderRightColor: 'rgba(142, 202, 230, 0.1)',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.xl,
        paddingBottom: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.1)',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFF',
        fontFamily: FONTS.heading,
    },
    items: {
        gap: SPACING.md,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        padding: SPACING.md,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: RADIUS.md,
    },
    itemText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: FONTS.body,
        fontWeight: '500',
    },
    footer: {
        marginTop: 'auto',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.1)',
        paddingTop: SPACING.md,
    },
    logoutBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.md,
        padding: SPACING.md,
    },
    logoutText: {
        color: COLORS.supportBlue,
        fontSize: 16,
        fontFamily: FONTS.body,
    },
});

export default Menu;
