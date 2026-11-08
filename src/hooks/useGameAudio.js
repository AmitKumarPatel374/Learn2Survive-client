import { useCallback, useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";

const useGameAudio = () => {
    // Start muted because browsers may block autoplay.
    const [muted, setMuted] = useState(true);

    const mutedRef = useRef(true);
    const musicRef = useRef(null);
    const soundsRef = useRef({});

    // Change or start the background music.
    const playMusic = useCallback((src, volume = 0.35) => {
        if (!src) return;

        // Stop and remove the previous track.
        if (musicRef.current) {
            musicRef.current.stop();
            musicRef.current.unload();
        }

        const music = new Howl({
            src: [src],
            loop: true,
            volume,
            html5: true,
            onloaderror: (id, error) => {
                console.error("Music loading error:", error);
            },
            onplayerror: (id, error) => {
                console.error("Music playback error:", error);
            },
        });

        musicRef.current = music;

        // Only start playback if sound is enabled.
        if (!mutedRef.current) {
            music.play();
        }
    }, []);

    // Play a sound effect. Create each Howl only when needed.
    const playSound = useCallback((name) => {
        if (mutedRef.current) return;

        const soundFiles = {
            select: {
                src: "/audio/effects/select.wav",
                volume: 0.6,
            },
            click: {
                src: "/audio/effects/select.wav",
                volume: 0.4,
            },
        };

        const config = soundFiles[name];

        if (!config) return;

        if (!soundsRef.current[name]) {
            soundsRef.current[name] = new Howl({
                src: [config.src],
                volume: config.volume,
                preload: true,
            });
        }

        const sound = soundsRef.current[name];

        // Allow the same effect to play repeatedly.
        sound.stop();
        sound.play();
    }, []);

    // Toggle actual Howler audio, not just the button state.
    const toggleMute = useCallback(() => {
        const nextMuted = !mutedRef.current;

        mutedRef.current = nextMuted;
        Howler.mute(nextMuted);
        setMuted(nextMuted);

        // Resume the current track when sound is enabled.
        if (!nextMuted && musicRef.current) {
            if (!musicRef.current.playing()) {
                musicRef.current.play();
            }
        }
    }, []);

    const stopMusic = useCallback(() => {
        musicRef.current?.stop();
    }, []);

    // Clean up audio when the game page unmounts.
    useEffect(() => {
        Howler.mute(true);

        return () => {
            musicRef.current?.stop();
            musicRef.current?.unload();

            Object.values(soundsRef.current).forEach((sound) => {
                sound.stop();
                sound.unload();
            });

            Howler.mute(false);
        };
    }, []);

    return {
        muted,
        playMusic,
        playSound,
        toggleMute,
        stopMusic,
    };
};

export default useGameAudio;