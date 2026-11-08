import { useState } from "react";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import ItemCard from "./ItemCard";

const SurvivalKitGame = ({ items, selectionLimit, onSubmit }) => {
    const [selectedNames, setSelectedNames] = useState([]);

    const toggleItem = (itemName) => {
        setSelectedNames((previous) => {
            // Already selected: remove it
            if (previous.includes(itemName)) {
                return previous.filter(name => name !== itemName);
            }

            // Prevent selecting more than the limit
            if (previous.length >= selectionLimit) {
                return previous;
            }

            // Select this item only
            return [...previous, itemName];
        });
    };

    const handleSubmit = () => {
        if (selectedNames.length !== selectionLimit) return;

        const selectedItems = selectedNames.map(name =>
            items.find(item => item.name === name)
        );

        onSubmit(selectedItems);
    };

    return (
        <div className="h-screen overflow-hidden bg-[#080f1e] text-white flex flex-col">

            {/* Header */}
            <header className="shrink-0 border-b border-white/10 bg-[#0d1729]">
                <div className="max-w-[1600px] mx-auto px-5 py-3 flex items-center justify-between gap-4">

                    <div>
                        <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-wider">
                            <ShieldCheck size={16} />
                            SURVIVAL KIT CHALLENGE
                        </div>

                        <h1 className="text-lg sm:text-xl font-bold mt-1">
                            Choose Your Essential Items
                        </h1>
                    </div>

                    {/* Counter */}
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-xl font-bold">
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

                        <div className="w-20 sm:w-28 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div
                                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                                style={{
                                    width: `${(selectedNames.length / selectionLimit) * 100}%`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
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

                    {/* Items grid */}
                    <div className="
                        grid grid-cols-2
                        sm:grid-cols-3
                        md:grid-cols-4
                        lg:grid-cols-5
                        gap-2 sm:gap-3
                    ">
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

            {/* Bottom action bar */}
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
                        className="
                            flex items-center gap-2
                            px-5 sm:px-7 py-3
                            rounded-xl font-semibold text-sm
                            bg-blue-600 hover:bg-blue-500
                            disabled:bg-slate-700
                            disabled:text-slate-400
                            disabled:cursor-not-allowed
                            transition
                        "
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