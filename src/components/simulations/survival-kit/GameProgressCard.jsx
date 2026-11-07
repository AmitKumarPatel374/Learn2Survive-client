import { Trophy, Target, RotateCcw, Clock } from "lucide-react";

const GameProgressCard = ({ progress }) => {
    if (!progress) return null;

    const stats = [
        {
            label: "Best Score",
            value: `${progress.bestScore}/30`,
            icon: Trophy,
            color: "text-yellow-400"
        },
        {
            label: "Last Score",
            value: `${progress.lastScore}/30`,
            icon: Target,
            color: "text-blue-400"
        },
        {
            label: "Attempts",
            value: progress.attempts,
            icon: RotateCcw,
            color: "text-purple-400"
        }
    ];

    return (
        <div className="w-full max-w-3xl mt-8">
            <h3 className="text-lg font-semibold mb-4">
                Your Previous Performance
            </h3>

            <div className="grid grid-cols-3 gap-3">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.label}
                            className="bg-white/[0.06] border border-white/10 rounded-2xl p-4"
                        >
                            <Icon className={`${stat.color} mb-3`} size={22} />

                            <p className="text-2xl font-bold">
                                {stat.value}
                            </p>

                            <p className="text-xs sm:text-sm text-slate-400 mt-1">
                                {stat.label}
                            </p>
                        </div>
                    );
                })}
            </div>

            {progress.lastPlayedAt && (
                <p className="text-xs text-slate-500 mt-3 flex items-center gap-2">
                    <Clock size={13} />
                    Last played:{" "}
                    {new Date(progress.lastPlayedAt).toLocaleDateString()}
                </p>
            )}
        </div>
    );
};

export default GameProgressCard;