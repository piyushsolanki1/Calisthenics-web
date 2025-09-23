import React, { useState } from "react";
import workoutsData from "../Data/workoutsData";
const WorkoutsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Filter workouts based on search and filters
  const filteredWorkouts = workoutsData.filter((workout) => {
    const matchesSearch = workout.title.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDifficulty =
      difficultyFilter === "all" || workout.difficulty.toLowerCase() === difficultyFilter.toLowerCase();

    const matchesCategory =
      categoryFilter === "all" || workout.category.toLowerCase() === categoryFilter.toLowerCase();

    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
       <div className="text-center m-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Calisthenics Workouts
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Progressive bodyweight exercises designed to build strength, flexibility, and endurance
          </p>
        </div>
      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search workouts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 p-2 border rounded-lg outline-none focus:ring focus:ring-amber-500"
        />

        {/* Difficulty Filter */}
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="p-2 border rounded-lg  "
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="all">All Categories</option>
          <option value="push">Push</option>
          <option value="pull">Pull</option>
          <option value="core">Core</option>
          <option value="legs">Legs</option>
          <option value="full body">Full Body</option>
        </select>
      </div>

      {/* No Results */}
      {filteredWorkouts.length === 0 && (
        <div className="text-center text-gray-500">No workouts found.</div>
      )}

      {/* Workouts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map((workout) => (
          <div
            key={workout.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] rounded-2xl shadow-sm"

          >
            <img
              src={workout.image}
              alt={workout.title}
              className="w-full h-48 object-cover rounded-t-lg" 
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 text-gray-800 dark:text-gray-100">
                {workout.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {workout.description}
              </p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>⏱ {workout.duration}</span>
                <span>💪 {workout.exercises} exercises</span>
              </div>
              <div className="mt-3 flex justify-between text-xs">
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {workout.difficulty}
                </span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                  {workout.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutsPage;
