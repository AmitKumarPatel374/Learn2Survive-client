
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Gamepad2,
    ArrowRight,
    BarChart3,
    LoaderCircle,
    AlertCircle,
    RefreshCw,
    Shield
} from "lucide-react";

import apiInstance from "../../config/apiInstance";

const SimulationsHomePage = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    // Fetch all published games
    const getGames = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await apiInstance.get("/simulation");

            if (response.data.success) {
                setGames(response.data.data || []);
            } else {
                setError("Unable to load simulations.");
            }
        } catch (error) {
            console.error("Error fetching games:", error);
            setError("Something went wrong while loading games.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getGames();
    }, []);

    // Group games by disaster
    const groupedGames = games.reduce((groups, game) => {
        const disasterId = game.disaster._id;

        if (!groups[disasterId]) {
            groups[disasterId] = {
                name: game.disaster.name,
                category: game.disaster.category,
                games: []
            };
        }

        groups[disasterId].games.push(game);

        return groups;
    }, {});

    // Navigate to selected game
    const handlePlayGame = (game) => {
        navigate(`/simulations/${game._id}`);
    };

    return (
        <div className="min-h-screen bg-[#0b1224] text-white px-6 py-8 md:px-10">

            {/* Page Heading */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-700/30 p-3 rounded-xl">
                        <Gamepad2 size={25} className="text-blue-400" />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Disaster Simulations
                        </h1>

                        <p className="text-sm text-gray-400 mt-1">
                            Learn, practice and experience real-life
                            disaster situations.
                        </p>
                    </div>
                </div>

                <p className="text-gray-400 text-sm max-w-2xl leading-6 mt-5">
                    Put your knowledge into action through interactive
                    challenges. Explore different disaster scenarios,
                    make decisions and improve your emergency preparedness.
                </p>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex flex-col items-center justify-center py-32">
                    <LoaderCircle
                        size={42}
                        className="text-blue-500 animate-spin mb-4"
                    />

                    <p className="text-gray-400">
                        Loading simulations...
                    </p>
                </div>
            )}

            {/* Error State */}
            {!loading && error && (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                    <AlertCircle
                        size={42}
                        className="text-red-400 mb-4"
                    />

                    <h2 className="text-xl font-semibold mb-2">
                        Unable to load simulations
                    </h2>

                    <p className="text-gray-400 mb-5">
                        {error}
                    </p>

                    <button
                        onClick={getGames}
                        className="flex items-center gap-2 bg-blue-700
                        hover:bg-blue-600 px-6 py-3 rounded-xl
                        font-semibold transition"
                    >
                        <RefreshCw size={17} />
                        Try Again
                    </button>
                </div>
            )}

            {/* Empty State */}
            {!loading && !error && games.length === 0 && (
                <div className="flex flex-col items-center justify-center py-28 text-center">
                    <Gamepad2
                        size={48}
                        className="text-gray-600 mb-4"
                    />

                    <h2 className="text-xl font-semibold mb-2">
                        No simulations available
                    </h2>

                    <p className="text-gray-400 text-sm">
                        New simulations will be available soon.
                    </p>
                </div>
            )}

            {/* Disaster-wise Game Sections */}
            {!loading && !error && games.length > 0 && (
                <div className="space-y-12">

                    {Object.entries(groupedGames).map(
                        ([disasterId, group]) => (
                            <section key={disasterId}>

                                {/* Disaster Heading */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1 h-8 bg-blue-600 rounded-full" />

                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold">
                                            {group.name}
                                        </h2>

                                        {group.category && (
                                            <p className="text-xs text-gray-500 mt-1">
                                                {group.category} Disaster
                                            </p>
                                        )}
                                    </div>

                                    <span className="ml-2 text-xs bg-[#1b2942]
                                    text-blue-300 px-3 py-1 rounded-full">
                                        {group.games.length}{" "}
                                        {group.games.length === 1 ? "Game" : "Games"}
                                    </span>
                                </div>

                                {/* Game Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2
                                xl:grid-cols-3 gap-6">

                                    {group.games.map((game) => (
                                        <div
                                            key={game._id}
                                            className="bg-[#101a30] border
                                            border-[#253149] rounded-[26px]
                                            overflow-hidden flex flex-col
                                            transition-all duration-300
                                            hover:border-blue-500/60
                                            hover:-translate-y-1
                                            hover:shadow-xl
                                            hover:shadow-blue-950/30"
                                        >

                                            {/* Thumbnail */}
                                            <div className="relative h-52
                                            bg-gradient-to-br from-blue-900
                                            to-[#17243b] overflow-hidden">

                                                {game.thumbnail ? (
                                                    <img
                                                        src={game.thumbnail}
                                                        alt={game.name}
                                                        className="w-full h-full
                                                        object-cover
                                                        transition-transform
                                                        duration-500
                                                        hover:scale-105"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = "none";
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="w-full h-full
                                                    flex items-center justify-center">
                                                        <Shield
                                                            size={65}
                                                            className="text-blue-300/40"
                                                        />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Card Content */}
                                            <div className="p-6 flex flex-col flex-1">

                                                <h3 className="text-xl font-bold
                                                leading-snug mb-3">
                                                    {game.name}
                                                </h3>

                                                <p className="text-gray-400
                                                text-sm leading-7 mb-5">
                                                    {game.description}
                                                </p>

                                                {/* Game Information */}
                                                <div className="flex flex-wrap
                                                items-center gap-5 text-gray-400
                                                text-sm mb-6">

                                                    <span className="flex
                                                    items-center gap-2">
                                                        <Gamepad2 size={16} />
                                                        Interactive Game
                                                    </span>

                                                    {game.gameType === "survival-kit" &&
                                                        game.gameConfig?.selectionLimit && (
                                                            <span className="flex
                                                            items-center gap-2">
                                                                <BarChart3 size={16} />
                                                                Select {game.gameConfig.selectionLimit} Items
                                                            </span>
                                                        )}

                                                </div>

                                                {/* Play Button */}
                                                <button
                                                    onClick={() => handlePlayGame(game)}
                                                    className="mt-auto w-full flex
                                                    items-center justify-center
                                                    gap-2 bg-blue-700
                                                    hover:bg-blue-600 text-white
                                                    font-semibold py-4 rounded-xl
                                                    transition-all duration-200
                                                    group"
                                                >
                                                    Play Now

                                                    <ArrowRight
                                                        size={19}
                                                        className="transition-transform
                                                        group-hover:translate-x-1"
                                                    />
                                                </button>

                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </section>
                        )
                    )}

                </div>
            )}

        </div>
    );
};

export default SimulationsHomePage;
