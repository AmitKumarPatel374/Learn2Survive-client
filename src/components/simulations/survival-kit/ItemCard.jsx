import { Check } from "lucide-react";

const ItemCard = ({ item, selected, disabled, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`
                relative rounded-xl overflow-hidden
                border text-left transition-all duration-200
                ${selected
                    ? "border-blue-500 bg-blue-500/10 ring-1 ring-blue-500"
                    : "border-white/10 bg-[#111d32] hover:border-blue-400/60"
                }
                ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
            `}
        >
            {/* Selection indicator */}
            <div className={`
                absolute top-2 right-2 z-10
                w-6 h-6 rounded-full
                flex items-center justify-center
                ${selected
                    ? "bg-blue-500 text-white"
                    : "bg-black/50 border border-white/30 text-transparent"
                }
            `}>
                <Check size={14} strokeWidth={3} />
            </div>

            {/* Compact image */}
            <div className="
                h-20 sm:h-24
                bg-[#17243a]
                flex items-center justify-center
                p-3
            ">
                <img
                    src={item.imageUrl}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Item information */}
            <div className="px-2 py-2 text-center">
                <h3 className="text-xs sm:text-sm font-semibold text-white truncate">
                    {item.name}
                </h3>

                <p className={`text-[10px] mt-1 ${
                    selected ? "text-blue-300" : "text-slate-500"
                }`}>
                    {selected ? "Selected" : "Select item"}
                </p>
            </div>
        </button>
    );
};

export default ItemCard;