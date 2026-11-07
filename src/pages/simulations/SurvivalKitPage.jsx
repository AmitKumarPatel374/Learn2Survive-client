import { useEffect, useState } from "react";

import GameIntro from "../../components/simulations/survival-kit/GameIntro";
import SurvivalKitGame from "../../components/simulations/survival-kit/SurvivalKitGame";
import GameResults from "../../components/simulations/survival-kit/GameResults";

import apiInstance from "../../config/apiInstance";

const SurvivalKitPage = ({ game }) => {
    const [stage, setStage] = useState("intro");

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [error, setError] = useState("");
    const [saveError, setSaveError] = useState("");

    const [played, setPlayed] = useState(false);
    const [progress, setProgress] = useState(null);

    const [selectedItems, setSelectedItems] = useState([]);
    const [score, setScore] = useState(0);

    const items = game.gameConfig?.items || [];
    const selectionLimit = game.gameConfig?.selectionLimit || 6;

    // Fetch previous game progress
    useEffect(() => {
        let active = true;

        const getProgress = async () => {
            setLoading(true);
            setError("");

            try {
                const result = await apiInstance.get(
                    `/simulation/score/${game._id}`
                );

                if (!active) return;

                setPlayed(result.data.played);

                if (result.data.played) {
                    setProgress(result.data.data);
                } else {
                    setProgress(null);
                }

            } catch (err) {
                console.error("Progress fetch error:", err);

                if (active) {
                    setError(
                        "Unable to fetch your game progress. Please refresh and try again."
                    );
                }
            } finally {
                if (active) setLoading(false);
            }
        };

        getProgress();

        return () => {
            active = false;
        };
    }, [game._id]);

    // Start game
    const startGame = () => {
        setSelectedItems([]);
        setSaveError("");
        setStage("playing");
    };

    // Submit answers and save score
    const submitGame = async (selected) => {
    const totalScore = selected.reduce(
        (total, item) => total + Number(item.rating),
        0
    );

    setSelectedItems(selected);
    setScore(totalScore);
    setStage("results");
    setSaving(true);
    setSaveError("");

    try {
        const response = await apiInstance.post(
            `/simulation/score/${game._id}`,
            { score: totalScore }
        );

        if (response.data.success) {
            setProgress(response.data.data);
            setPlayed(true);
        }
    } catch (err) {
        console.error("Score saving error:", err);
        setSaveError("Unable to save your score.");
    } finally {
        setSaving(false);
    }
};

    if (loading) {
        return (
            <div className="min-h-screen bg-[#080f1e] flex items-center justify-center text-white">
                Loading your game...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#080f1e] flex flex-col items-center justify-center text-white gap-4 px-5">
                <p className="text-red-400">{error}</p>

                <button
                    onClick={() => window.location.reload()}
                    className="px-5 py-2 rounded-lg bg-blue-600"
                >
                    Try Again
                </button>
            </div>
        );
    }

    if (!items.length) {
        return (
            <div className="min-h-screen bg-[#080f1e] flex items-center justify-center text-white">
                No survival items configured for this game.
            </div>
        );
    }

    return (
        <>
            {stage === "intro" && (
                <GameIntro
                    game={game}
                    progress={played ? progress : null}
                    onStart={startGame}
                />
            )}

            {stage === "playing" && (
                <SurvivalKitGame
                    items={items}
                    selectionLimit={selectionLimit}
                    onSubmit={submitGame}
                />
            )}

            {stage === "results" && (
                <GameResults
                    selectedItems={selectedItems}
                    score={score}
                    progress={progress}
                    onPlayAgain={startGame}
                    saving={saving}
                    saveError={saveError}
                />
            )}
        </>
    );
};

export default SurvivalKitPage;