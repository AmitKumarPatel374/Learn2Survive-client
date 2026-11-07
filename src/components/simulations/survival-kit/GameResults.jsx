import {
    Trophy,
    Star,
    RotateCcw,
    ArrowLeft,
    Target
} from "lucide-react";

const GameResults = ({
    selectedItems,
    score,
    progress,
    onPlayAgain,
    saving,
    saveError
}) => {

    const getMessage = () => {
        if (score >= 25) return "Excellent Preparation!";
        if (score >= 18) return "Good Effort!";
        if (score >= 10) return "Keep Learning!";
        return "Keep Practicing!";
    };

    const getRatingColor = (rating) => {
        if (rating >= 4) return "text-green-400";
        if (rating >= 2) return "text-yellow-400";
        return "text-red-400";
    };

    return (
        <div className="h-screen overflow-hidden bg-[#080f1e] text-white flex flex-col">

            {/* Header */}
            <header className="shrink-0 border-b border-white/10 bg-[#0d1729]">
                <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-blue-400 font-bold tracking-wider">
                            SURVIVAL KIT CHALLENGE
                        </p>
                        <h1 className="text-lg sm:text-xl font-bold mt-1">
                            Challenge Results
                        </h1>
                    </div>

                    <div className="flex items-center gap-2 text-green-400 text-sm">
                        <Target size={17} />
                        Completed
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-1 min-h-0 flex items-center justify-center px-4 py-3">

                <div className="w-full max-w-5xl">

                    {/* Score section */}
                    <div className="text-center mb-5">

                        <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mx-auto mb-2">
                            <Trophy className="text-yellow-400" size={25} />
                        </div>

                        <h2 className="text-xl sm:text-3xl font-black">
                            {getMessage()}
                        </h2>

                        <div className="flex items-baseline justify-center gap-2 mt-2">
                            <span className="text-5xl sm:text-6xl font-black text-blue-400">
                                {score}
                            </span>
                            <span className="text-lg text-slate-500">
                                / 30
                            </span>
                        </div>

                        <div className="max-w-xs mx-auto h-2 bg-white/10 rounded-full overflow-hidden mt-3">
                            <div
                                className="h-full bg-blue-500 rounded-full transition-all duration-700"
                                style={{
                                    width: `${(score / 30) * 100}%`
                                }}
                            />
                        </div>

                    </div>

                    {/* Performance statistics */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-5">

                        {[
                            {
                                label: "Best Score",
                                value: progress?.bestScore ?? score
                            },
                            {
                                label: "Previous Best",
                                value: progress?.lastBestScore ?? 0
                            },
                            {
                                label: "Attempts",
                                value: progress?.attempts ?? 1
                            }
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-[#111d32] border border-white/10 rounded-xl p-3 text-center"
                            >
                                <p className="text-xl sm:text-2xl font-bold">
                                    {stat.value}
                                    {stat.label !== "Attempts" && (
                                        <span className="text-xs text-slate-500">
                                            /30
                                        </span>
                                    )}
                                </p>

                                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                                    {stat.label}
                                </p>
                            </div>
                        ))}

                    </div>

                    {/* Selected items only */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <h3 className="font-bold text-base sm:text-lg">
                                    Your Selected Items
                                </h3>
                                <p className="text-xs text-slate-400 mt-1">
                                    Review the importance of your choices.
                                </p>
                            </div>

                            <span className="text-xs text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-full">
                                {selectedItems.length} Items
                            </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">

                            {selectedItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex items-center gap-2 sm:gap-3 bg-[#111d32] border border-white/10 rounded-xl p-2 sm:p-3"
                                >
                                    <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 bg-[#1b2a40] rounded-lg p-2">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h4 className="text-xs sm:text-sm font-semibold truncate">
                                            {item.name}
                                        </h4>

                                        <p className={`text-[10px] sm:text-xs mt-1 ${getRatingColor(item.rating)}`}>
                                            Importance: {item.rating}/5
                                        </p>

                                        <div className="flex gap-0.5 mt-1">
                                            {[1, 2, 3, 4, 5].map((number) => (
                                                <Star
                                                    key={number}
                                                    size={11}
                                                    fill={
                                                        number <= item.rating
                                                            ? "currentColor"
                                                            : "none"
                                                    }
                                                    className={
                                                        number <= item.rating
                                                            ? getRatingColor(item.rating)
                                                            : "text-slate-600"
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Action button */}
                    <div className="mt-5 flex justify-center">
                        <button
                            onClick={onPlayAgain}
                            className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-sm transition shadow-lg shadow-blue-600/20"
                        >
                            <RotateCcw size={17} />
                            Play Again
                        </button>
                    </div>

                    {saving && (
                        <p className="text-center text-xs text-blue-300 mt-2">
                            Saving your score...
                        </p>
                    )}

                    {saveError && (
                        <p className="text-center text-xs text-red-400 mt-2">
                            {saveError}
                        </p>
                    )}

                </div>
            </main>
        </div>
    );
};

export default GameResults;