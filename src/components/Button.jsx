import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    onPress,
    style,
    icon: Icon,
    fullWidth = false,
    ...props
}) => {
    const handlePress = onPress || onClick;

    const getButtonStyle = () => {
        switch (variant) {
            case 'primary': return styles.primary;
            case 'secondary': return styles.secondary;
            case 'ghost': return styles.ghost;
            default: return styles.primary;
        }
    };

    const getTextStyle = () => {
        switch (variant) {
            case 'ghost': return styles.textGhost;
            default: return styles.textPrimary;
        }
    };

    return (
        <TouchableOpacity
            style={[
                styles.base,
                getButtonStyle(),
                fullWidth && styles.fullWidth,
                style
            ]}
            onPress={handlePress}
            activeOpacity={0.8}
            {...props}
        >
            {Icon && (
                <View style={styles.iconContainer}>
                    <Icon size={20} color={variant === 'ghost' ? COLORS.supportBlue : '#FFF'} />
                </View>
            )}
            <Text style={[styles.textBase, getTextStyle()]}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RADIUS.md,
        paddingHorizontal: SPACING.lg,
    },
    fullWidth: {
        width: '100%',
    },
    primary: {
        backgroundColor: COLORS.primaryAccent,
        shadowColor: COLORS.primaryAccent,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 5,
    },
    secondary: {
        backgroundColor: COLORS.brandBlue,
    },
    ghost: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.3)',
    },
    textBase: {
        fontFamily: FONTS.heading,
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    textPrimary: {
        color: '#FFFFFF',
    },
    textGhost: {
        color: COLORS.supportBlue,
    },
    iconContainer: {
        marginRight: SPACING.sm,
    },
});

export default Button;
