import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Animated } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { X, Briefcase, Mail, Home, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { COLORS, FONTS, SPACING, RADIUS } from '../theme';

const Menu = ({ visible, onClose }) => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleNavigate = (path) => {
        onClose();
        navigate(path);
    };

    const handleLogout = () => {
        logout();
        onClose();
        navigate('/login');
    };

    if (!visible) return null;

    return (
        <Modal transparent visible={visible} animationType="fade">
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
                        <TouchableOpacity style={styles.item} onPress={() => handleNavigate('/home')}>
                            <Home size={20} color={COLORS.primaryAccent} />
                            <Text style={styles.itemText}>Home</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item} onPress={() => handleNavigate('/portal')}>
                            <Briefcase size={20} color={COLORS.primaryAccent} />
                            <Text style={styles.itemText}>Internship Fair</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.item} onPress={() => handleNavigate('/contact')}>
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
