import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';
import { Mail, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

const Login = () => {
    const navigate = useNavigate();
    const { loginWithOTP, verifyOTP, loginWithGoogle, isLoading, error } = useAuth();

    const [step, setStep] = useState('input'); // input, otp
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [otp, setOtp] = useState('');

    const handleSendOTP = async () => {
        if (!emailOrPhone) return;
        const result = await loginWithOTP(emailOrPhone);
        if (result.success) {
            setStep('otp');
        }
    };

    const handleVerifyOTP = async () => {
        if (!otp) return;
        const result = await verifyOTP(emailOrPhone, otp);
        if (result.success) {
            navigate('/home');
        }
    };

    const handleGoogleLogin = async () => {
        const result = await loginWithGoogle();
        if (result.success) {
            navigate('/home');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Sign in to continue to E-SUMMIT'26</Text>

                {error && <Text style={styles.error}>{error}</Text>}

                {step === 'input' ? (
                    <>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Email or Phone</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your email or phone"
                                placeholderTextColor={COLORS.supportBlue}
                                value={emailOrPhone}
                                onChangeText={setEmailOrPhone}
                                autoCapitalize="none"
                            />
                        </View>

                        <Button
                            variant="primary"
                            fullWidth
                            onPress={handleSendOTP}
                            disabled={isLoading}
                        >
                            {isLoading ? <ActivityIndicator color="#FFF" /> : 'Continue'}
                        </Button>

                        <View style={styles.divider}>
                            <View style={styles.line} />
                            <Text style={styles.orText}>OR</Text>
                            <View style={styles.line} />
                        </View>

                        <Button
                            variant="secondary"
                            fullWidth
                            onPress={handleGoogleLogin}
                            disabled={isLoading}
                        >
                            Sign in with Google
                        </Button>
                    </>
                ) : (
                    <>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Enter OTP</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="1234"
                                placeholderTextColor={COLORS.supportBlue}
                                value={otp}
                                onChangeText={setOtp}
                                keyboardType="numeric"
                                maxLength={4}
                            />
                            <Text style={styles.hint}>OTP sent to {emailOrPhone}</Text>
                        </View>

                        <Button
                            variant="primary"
                            fullWidth
                            onPress={handleVerifyOTP}
                            disabled={isLoading}
                        >
                            {isLoading ? <ActivityIndicator color="#FFF" /> : 'Verify & Login'}
                        </Button>

                        <TouchableOpacity onPress={() => setStep('input')} style={styles.backLink}>
                            <Text style={styles.backText}>Change Email/Phone</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgDark,
        justifyContent: 'center',
        padding: SPACING.lg,
    },
    card: {
        backgroundColor: COLORS.darkContrast,
        padding: SPACING.xl,
        borderRadius: RADIUS.lg,
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.1)',
    },
    title: {
        fontFamily: FONTS.heading,
        fontSize: 28,
        fontWeight: '700',
        color: '#FFF',
        marginBottom: SPACING.xs,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: FONTS.body,
        fontSize: 14,
        color: COLORS.supportBlue,
        marginBottom: SPACING.xl,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: SPACING.lg,
    },
    label: {
        color: COLORS.supportBlue,
        marginBottom: SPACING.sm,
        fontSize: 14,
        fontFamily: FONTS.body,
    },
    input: {
        backgroundColor: 'rgba(2, 48, 71, 0.5)',
        borderWidth: 1,
        borderColor: 'rgba(142, 202, 230, 0.3)',
        borderRadius: RADIUS.md,
        padding: SPACING.md,
        color: '#FFF',
        fontSize: 16,
        fontFamily: FONTS.body,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SPACING.lg,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(142, 202, 230, 0.1)',
    },
    orText: {
        color: COLORS.supportBlue,
        marginHorizontal: SPACING.md,
        fontSize: 12,
    },
    error: {
        color: '#ff4d4d',
        marginBottom: SPACING.md,
        textAlign: 'center',
    },
    hint: {
        color: COLORS.supportBlue,
        fontSize: 12,
        marginTop: SPACING.sm,
    },
    backLink: {
        marginTop: SPACING.md,
        alignItems: 'center',
    },
    backText: {
        color: COLORS.brandBlue,
        fontSize: 14,
    },
});

export default Login;
