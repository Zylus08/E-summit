import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

const Button = ({
    children,
    variant = 'primary',
    onPress,
    style,
    icon: Icon,
    fullWidth = false,
    disabled = false,
    ...props
}) => {
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
                disabled && styles.disabled,
                style
            ]}
            onPress={disabled ? null : onPress}
            activeOpacity={0.8}
            disabled={disabled}
            {...props}
        >
            {Icon && (
                <View style={styles.iconContainer}>
                    <Icon size={20} color={variant === 'ghost' ? COLORS.supportBlue : '#FFF'} />
                </View>
            )}
            <Text style={[styles.textBase, getTextStyle(), disabled && styles.textDisabled]}>{children}</Text>
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
    disabled: {
        opacity: 0.5,
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
    textDisabled: {
        color: '#CCC',
    },
    iconContainer: {
        marginRight: SPACING.sm,
    },
});

export default Button;
