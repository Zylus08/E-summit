import React from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { COLORS, FONTS, SPACING } from '../theme';

const Landing = () => {
    const navigate = useNavigate();
    const spinValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 20000,
                easing: Easing.linear,
                useNativeDriver: true, // web supports this
            })
        ).start();
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.hero}>
                    <Text style={styles.title}>
                        <Text style={styles.textBrand}>E-</Text>SUMMIT'26
                    </Text>
                    <Text style={styles.subtitle}>
                        Innovate. Disrupt. Scale.
                    </Text>
                </View>

                <View style={styles.visual}>
                    <Animated.View style={[styles.circle, { transform: [{ rotate: spin }] }]}>
                        <View style={styles.dot} />
                    </Animated.View>
                    <View style={styles.line} />
                </View>

                <View style={styles.actions}>
                    <Button
                        variant="primary"
                        fullWidth
                        onPress={() => navigate('/home')}
                        icon={ArrowRight}
                    >
                        Enter The Future
                    </Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgDark,
        padding: SPACING.xl,
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 60,
        paddingBottom: 40,
    },
    hero: {
        marginBottom: SPACING.md,
    },
    title: {
        fontFamily: FONTS.heading,
        fontSize: 48,
        fontWeight: '700',
        color: '#FFF',
        lineHeight: 48,
        letterSpacing: -2,
        marginBottom: SPACING.md,
    },
    textBrand: {
        color: COLORS.brandBlue,
    },
    subtitle: {
        fontFamily: FONTS.mono,
        fontSize: 18,
        color: COLORS.supportBlue,
        letterSpacing: 1,
    },
    visual: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    circle: {
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: 'rgba(33, 158, 188, 0.3)',
        borderRadius: 100,
        position: 'absolute',
    },
    dot: {
        position: 'absolute',
        top: -10,
        left: 90, // center - half width
        width: 20,
        height: 20,
        backgroundColor: COLORS.brandBlue,
        borderRadius: 10,
        shadowColor: COLORS.brandBlue,
        shadowRadius: 20,
        shadowOpacity: 1,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: COLORS.brandBlue, // Gradient not supported in basic View, using solid color or could use Image
        opacity: 0.5,
    },
    actions: {
        width: '100%',
    },
});

export default Landing;
