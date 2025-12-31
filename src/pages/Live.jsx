import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { Play, Mic, MicOff, Maximize } from 'lucide-react';
import { COLORS, FONTS, RADIUS, SPACING } from '../theme';

const Live = () => {
    const [isJoined, setIsJoined] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    return (
        <View style={styles.container}>
            <Header title="Live Stream" />

            <View style={styles.content}>
                {!isJoined ? (
                    <View style={styles.placeholder}>
                        <View style={styles.indicator}>
                            <View style={styles.pulse} />
                            <Text style={styles.liveText}>LIVE NOW</Text>
                        </View>
                        <Text style={styles.title}>Keynote: The Future of AI</Text>
                        <Text style={styles.subtitle}>Starting in 5 minutes</Text>
                        <Button variant="primary" onPress={() => setIsJoined(true)} icon={Play}>
                            Join Stream
                        </Button>
                    </View>
                ) : (
                    <View style={styles.player}>
                        <View style={styles.videoBg} />
                        <View style={styles.overlay}>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>LIVE</Text>
                            </View>
                            <View style={styles.controls}>
                                <TouchableOpacity style={styles.controlBtn} onPress={() => setIsMuted(!isMuted)}>
                                    {isMuted ? <MicOff size={24} color="#FFF" /> : <Mic size={24} color="#FFF" />}
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.controlBtn}>
                                    <Maximize size={24} color="#FFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
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
        justifyContent: 'center',
        padding: SPACING.md,
    },
    placeholder: {
        alignItems: 'center',
        backgroundColor: 'rgba(2, 48, 71, 0.5)',
        padding: SPACING.xl,
        borderRadius: RADIUS.lg,
        borderWidth: 1,
        borderColor: COLORS.brandBlue,
    },
    indicator: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: SPACING.md,
    },
    pulse: {
        width: 10,
        height: 10,
        backgroundColor: '#ff0000',
        borderRadius: 5,
    },
    liveText: {
        color: '#ff0000',
        fontWeight: '700',
        fontFamily: FONTS.heading,
    },
    title: {
        fontSize: 20,
        color: '#FFF',
        marginBottom: SPACING.sm,
        fontFamily: FONTS.heading,
        fontWeight: '700',
    },
    subtitle: {
        color: COLORS.supportBlue,
        marginBottom: SPACING.lg,
        fontFamily: FONTS.body,
    },
    player: {
        width: '100%',
        aspectRatio: 16 / 9,
        backgroundColor: '#000',
        borderRadius: RADIUS.md,
        overflow: 'hidden',
        position: 'relative',
    },
    videoBg: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'space-between',
        padding: SPACING.md,
    },
    badge: {
        backgroundColor: '#ff0000',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        alignSelf: 'flex-start',
    },
    badgeText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '700',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: SPACING.md,
    },
    controlBtn: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 8,
        borderRadius: 20,
    },
});

export default Live;
