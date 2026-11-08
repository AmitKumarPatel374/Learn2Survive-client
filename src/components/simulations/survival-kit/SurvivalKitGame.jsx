import { useState } from "react";

import {
    ArrowRight,
    ShieldCheck,
    LogOut,
    Volume2,
    VolumeX,
} from "lucide-react";

import ItemCard from "./ItemCard";

const SurvivalKitGame = ({
    items,
    selectionLimit,
    onSubmit,
    onQuit,
    muted,
    onToggleMute,
    playSound,
}) => {
    const [selectedNames, setSelectedNames] = useState([]);

    const toggleItem = (itemName) => {
        // Deselect an already selected item.
        if (selectedNames.includes(itemName)) {
            setSelectedNames((previous) =>
                previous.filter((name) => name !== itemName)
            );

            playSound("select");
            return;
        }

        // Do not select beyond the selection limit.
        if (selectedNames.length >= selectionLimit) {
            return;
        }

        // Select the new item.
        setSelectedNames((previous) => [...previous, itemName]);

        playSound("select");
    };

    const handleSubmit = () => {
        if (selectedNames.length !== selectionLimit) return;

        const selectedItems = selectedNames
            .map((name) => items.find((item) => item.name === name))
            .filter(Boolean);

        onSubmit(selectedItems);
    };

    return (
        <div className="h-screen overflow-hidden bg-[#080f1e] text-white flex flex-col">

            {/* HEADER */}
            <header className="shrink-0 border-b border-white/10 bg-[#0d1729]">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-5 py-3 flex items-center justify-between gap-3">

                    {/* GAME TITLE */}
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-wider">
                            <ShieldCheck size={16} />
                            SURVIVAL KIT CHALLENGE
                        </div>

                        <h1 className="text-base sm:text-xl font-bold mt-1">
                            Choose Your Essential Items
                        </h1>
                    </div>

                    {/* COUNTER, PROGRESS, SOUND AND QUIT */}
                    <div className="flex items-center gap-2 sm:gap-5 shrink-0">

                        {/* SELECTION COUNTER */}
                        <div className="text-right">
                            <p className="text-lg sm:text-xl font-bold">
                                <span className="text-blue-400">
                                    {selectedNames.length}
                                </span>
                                <span className="text-slate-500">
                                    /{selectionLimit}
                                </span>
                            </p>

                            <p className="text-[10px] text-slate-400">
                                Selected
                            </p>
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="hidden sm:block w-16 md:w-24 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div
                                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                                style={{
                                    width: `${(selectedNames.length / selectionLimit) * 100}%`,
                                }}
                            />
                        </div>

                        {/* SOUND CONTROL */}
                        <button
                            type="button"
                            onClick={onToggleMute}
                            className="flex items-center justify-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                            aria-label={muted ? "Enable sound" : "Mute sound"}
                            title={muted ? "Enable sound" : "Mute sound"}
                        >
                            {muted ? (
                                <>
                                    <VolumeX size={18} />
                                    <span className="hidden md:inline text-xs">
                                        Enable Sound
                                    </span>
                                </>
                            ) : (
                                <>
                                    <Volume2 size={18} />
                                    <span className="hidden md:inline text-xs">
                                        Mute
                                    </span>
                                </>
                            )}
                        </button>

                        {/* QUIT BUTTON */}
                        <button
                            type="button"
                            onClick={onQuit}
                            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all"
                        >
                            <LogOut size={16} />
                            <span className="text-xs sm:text-sm font-semibold">
                                Quit
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="flex-1 min-h-0 overflow-y-auto">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3">

                    <div className="flex items-center justify-between gap-3 mb-3">
                        <p className="text-xs sm:text-sm text-slate-400">
                            Select exactly {selectionLimit} items that will
                            help you prepare for this disaster.
                        </p>

                        <p className="text-xs text-blue-300 shrink-0">
                            Ratings hidden
                        </p>
                    </div>

                    {/* ITEMS GRID */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
                        {items.map((item, index) => (
                            <ItemCard
                                key={item.name}
                                item={item}
                                index={index}
                                selected={selectedNames.includes(item.name)}
                                disabled={
                                    selectedNames.length >= selectionLimit &&
                                    !selectedNames.includes(item.name)
                                }
                                onClick={() => toggleItem(item.name)}
                            />
                        ))}
                    </div>
                </div>
            </main>

            {/* BOTTOM ACTION BAR */}
            <footer className="shrink-0 border-t border-white/10 bg-[#0d1729] px-4 py-3">
                <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">

                    <div>
                        <p className="text-sm font-semibold">
                            {selectedNames.length === selectionLimit
                                ? "All items selected!"
                                : `Choose ${selectionLimit - selectedNames.length} more`}
                        </p>

                        <p className="text-xs text-slate-500 mt-1">
                            {selectedNames.length} of {selectionLimit} items
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={selectedNames.length !== selectionLimit}
                        className="flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-400 disabled:cursor-not-allowed transition"
                    >
                        Submit Choices
                        <ArrowRight size={17} />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default SurvivalKitGame;