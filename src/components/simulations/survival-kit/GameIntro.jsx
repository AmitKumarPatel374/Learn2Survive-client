import { useState } from "react";
import {
    Play,
    ShieldCheck,
    Clock,
    Package,
    Trophy,
    ArrowLeft
} from "lucide-react";
import GameProgressCard from "./GameProgressCard";

const GameIntro = ({ game, progress, onStart, saving }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background */}
            <img
                src={game.introImage}
                alt={game.name}
                onLoad={() => setImageLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#080f1e] via-[#080f1e]/90 to-[#080f1e]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e] via-transparent to-[#080f1e]/20" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 py-20">

                <div className="max-w-2xl">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-sm mb-6">
                        <ShieldCheck size={17} />
                        Disaster Preparedness Simulation
                    </div>

                    <p className="uppercase tracking-[0.25em] text-orange-400 text-sm font-bold mb-3">
                        {game.disaster?.name || "Disaster Challenge"}
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                        {game.name}
                    </h1>

                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed mt-6">
                        {game.description}
                    </p>

                    {game.disaster?.shortDescription && (
                        <p className="text-slate-400 text-sm leading-relaxed mt-3">
                            {game.disaster.shortDescription}
                        </p>
                    )}

                    {/* Game details */}
                    <div className="flex flex-wrap gap-5 mt-7 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                            <Package size={18} className="text-blue-400" />
                            20 Survival Items
                        </div>

                        <div className="flex items-center gap-2">
                            <Trophy size={18} className="text-yellow-400" />
                            30 Maximum Points
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-green-400" />
                            5–10 Minutes
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-8 bg-white/[0.06] border border-white/10 rounded-2xl p-5">
                        <h3 className="font-semibold mb-3">
                            Your Mission
                        </h3>

                        <ul className="space-y-2 text-sm text-slate-300">
                            <li>• Choose 6 essential survival items.</li>
                            <li>• Each item has an importance score from 0 to 5.</li>
                            <li>• Ratings are revealed only after submission.</li>
                            <li>• Earn up to 30 points.</li>
                        </ul>
                    </div>

                    {/* Progress */}
                    <GameProgressCard progress={progress} />

                    <button
                        onClick={onStart}
                        disabled={saving}
                        className="mt-8 inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 font-bold text-lg shadow-lg shadow-blue-600/20 transition"
                    >
                        <Play size={21} fill="currentColor" />
                        {saving
                            ? "Loading..."
                            : progress
                                ? "Play Again"
                                : "Start Challenge"
                        }
                    </button>

                    <p className="text-xs text-slate-500 mt-4">
                        Remember: Follow official evacuation instructions.
                        Never delay evacuation to collect survival items.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default GameIntro;