import { useRef, useState, useEffect } from "react";
import { Maximize, Minimize } from "lucide-react";
import { useParams } from "react-router-dom";
import apiInstance from "../../config/apiInstance";
import SurvivalKitPage from "./SurvivalKitPage";

const GamePage = () => {
    const gameRef = useRef(null);

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { gameId } = useParams();

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(
                document.fullscreenElement === gameRef.current
            );
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener(
                "fullscreenchange",
                handleFullscreenChange
            );
        };
    }, []);

    useEffect(() => {
        const getGame = async () => {
            setLoading(true);
            setError("");

            try {
                const response = await apiInstance.get(
                    `/simulation/${gameId}`
                );

                if (response.data.success) {
                    setGame(response.data.data);
                } else {
                    setError("Unable to load game.");
                }
            } catch (err) {
                console.error(err);
                setError("Something went wrong while loading the game.");
            } finally {
                setLoading(false);
            }
        };

        getGame();
    }, [gameId]);

    const toggleFullscreen = async () => {
        try {
            if (!document.fullscreenElement) {
                await gameRef.current?.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch (err) {
            console.error("Fullscreen error:", err);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#080f1e] flex items-center justify-center text-white">
                Loading game...
            </div>
        );
    }

    if (error || !game) {
        return (
            <div className="min-h-screen bg-[#080f1e] flex items-center justify-center text-white">
                {error || "Game not found"}
            </div>
        );
    }

    return (
        <div
            ref={gameRef}
            className="relative min-h-screen bg-[#080f1e] text-white"
        >
            {game.gameType === "survival-kit" && (
                <SurvivalKitPage game={game} />
            )}

            <button
                onClick={toggleFullscreen}
                className="fixed bottom-5 right-5 z-50 p-3 rounded-xl border border-white/15 bg-slate-900/90 hover:bg-slate-800 transition"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
                {isFullscreen
                    ? <Minimize size={22} />
                    : <Maximize size={22} />
                }
            </button>
        </div>
    );
};

export default GamePage;