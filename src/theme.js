import { Platform } from 'react-native';

export const COLORS = {
    primaryAccent: '#FB8500',
    secondaryAccent: '#FFB703',
    brandBlue: '#219EBC',
    darkContrast: '#023047',
    supportBlue: '#8ECAE6',
    bgDark: '#011627',
    bgCard: '#023047',
    textWhite: '#FFFFFF',
    textSupport: '#8ECAE6',
};

export const FONTS = {
    heading: Platform.select({ web: 'Space Grotesk', default: 'System' }),
    body: Platform.select({ web: 'Inter', default: 'System' }),
    mono: Platform.select({ web: 'JetBrains Mono', default: 'Courier' }),
};

export const SPACING = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const RADIUS = {
    sm: 8,
    md: 12,
    lg: 16,
    full: 9999,
};

export const LAYOUT = {
    maxWidth: 480,
};
