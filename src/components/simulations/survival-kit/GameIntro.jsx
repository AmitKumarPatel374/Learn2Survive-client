import {
    ShieldCheck,
    Package,
    Trophy,
    Clock3,
    Play,
    Target,
    RotateCcw,
    ArrowLeft,
    Volume2,
    VolumeX,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const GameIntro = ({
    game,
    progress,
    onStart,
    muted,
    onToggleMute,
    playSound,
}) => {
    const selectionLimit = game.gameConfig?.selectionLimit || 6;
    const totalItems = game.gameConfig?.items?.length || 20;

    const navigate = useNavigate();

    const handleStart = () => {
        playSound("click");
        onStart();
    };

    const handleBack = () => {
        playSound("click");
        navigate("/dashboard/simulations");
    };

    return (
        <div className="relative h-[100dvh] w-full overflow-hidden bg-[#080f1e] text-white">

            {/* FULL SCREEN INTRO IMAGE */}
            <img
                src={game.introImage}
                alt="Game intro"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* DARK GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e] via-[#080f1e]/30 to-black/10" />

            {/* TOP LABEL */}
            <div className="absolute top-5 left-5 sm:left-8 z-10">

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-sm text-blue-200">
                    <ShieldCheck size={16} />
                    Disaster Preparedness Simulation
                </div>

                <button
                    onClick={handleBack}
                    className="mt-3 flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                >
                    <ArrowLeft size={17} />
                    Back to Simulations
                </button>
            </div>

            {/* SOUND CONTROL */}
            <button
                type="button"
                onClick={onToggleMute}
                className="absolute top-5 right-5 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm hover:bg-black/70 transition"
                aria-label={muted ? "Enable sound" : "Mute sound"}
                title={muted ? "Enable sound" : "Mute sound"}
            >
                {muted ? (
                    <>
                        <VolumeX size={17} />
                        <span>Enable Sound</span>
                    </>
                ) : (
                    <>
                        <Volume2 size={17} />
                        <span>Mute</span>
                    </>
                )}
            </button>

            {/* BOTTOM CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-5 sm:px-8 lg:px-12 pt-16 pb-6 sm:pb-8">

                <div className="max-w-5xl">

                    {/* DISASTER NAME */}
                    <p className="text-orange-400 font-bold uppercase tracking-[0.25em] text-xs sm:text-sm mb-2">
                        {game.disaster?.name}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="text-base sm:text-lg text-white font-medium max-w-3xl leading-relaxed">
                        {game.description}
                    </p>

                    {game.disaster?.shortDescription && (
                        <p className="hidden md:block text-sm text-slate-300 mt-1 max-w-3xl">
                            {game.disaster.shortDescription}
                        </p>
                    )}

                    {/* GAME STATS */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5 text-xs sm:text-sm text-slate-200">

                        <div className="flex items-center gap-2">
                            <Package size={17} className="text-blue-400" />
                            {totalItems} Survival Items
                        </div>

                        <div className="flex items-center gap-2">
                            <Trophy size={17} className="text-yellow-400" />
                            {selectionLimit * 5} Maximum Points
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock3 size={17} className="text-green-400" />
                            5–10 Minutes
                        </div>
                    </div>

                    {/* BOTTOM PANEL */}
                    <div className="mt-5 flex flex-col lg:flex-row lg:items-end justify-between gap-5">

                        {/* MISSION */}
                        <div className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/15 p-4 sm:p-5 max-w-xl">
                            <h3 className="font-bold text-sm sm:text-base mb-2">
                                Your Mission
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs sm:text-sm text-slate-200">
                                <p>• Choose {selectionLimit} essential items.</p>
                                <p>• Each item has a score from 0 to 5.</p>
                                <p>• Ratings are revealed after submission.</p>
                                <p>• Earn up to {selectionLimit * 5} points.</p>
                            </div>
                        </div>

                        {/* PERFORMANCE + START */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">

                            {progress && (
                                <div className="flex gap-2">

                                    <div className="rounded-xl bg-black/45 backdrop-blur-md border border-white/10 px-3 py-2 min-w-[85px]">
                                        <Trophy size={16} className="text-yellow-400 mb-1" />
                                        <p className="text-lg font-bold">
                                            {progress.bestScore}/30
                                        </p>
                                        <p className="text-[10px] text-slate-400">
                                            Best Score
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-black/45 backdrop-blur-md border border-white/10 px-3 py-2 min-w-[85px]">
                                        <Target size={16} className="text-blue-400 mb-1" />
                                        <p className="text-lg font-bold">
                                            {progress.lastScore}/30
                                        </p>
                                        <p className="text-[10px] text-slate-400">
                                            Last Score
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-black/45 backdrop-blur-md border border-white/10 px-3 py-2 min-w-[85px]">
                                        <RotateCcw size={16} className="text-purple-400 mb-1" />
                                        <p className="text-lg font-bold">
                                            {progress.attempts}
                                        </p>
                                        <p className="text-[10px] text-slate-400">
                                            Attempts
                                        </p>
                                    </div>

                                </div>
                            )}

                            <button
                                onClick={handleStart}
                                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all font-bold text-base shadow-xl shadow-blue-600/30 whitespace-nowrap"
                            >
                                <Play size={20} fill="currentColor" />
                                Start Mission
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameIntro;