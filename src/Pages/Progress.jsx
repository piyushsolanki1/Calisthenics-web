import React from "react";
import {
  Zap,
  Clock,
  TrendingUp,
  Calendar,
  BarChart3,
  Trophy,
  BicepsFlexed,
  TargetIcon,
  Flame,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// Find maximum for scaling
const maxExerciseCount = Math.max(...exerciseTypes.map((e) => e.count));


const Progress = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center m-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Your Progress
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Track your calisthenics journey and celebrate your achievements.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
        <div className="bg-background dark:bg-gray-800 flex items-center rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300">
          <span className="text-amber-500 p-4">
            <Zap size={35} />
          </span>
          <div>
            <h3 className="text-xl font-bold">85</h3>
            <p className="text-gray-500">Total Workouts</p>
          </div>
        </div>

        <div className="bg-background dark:bg-gray-800 flex items-center rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300">
          <span className="text-amber-500 p-4">
            <Clock size={35} />
          </span>
          <div>
            <h3 className="text-xl font-bold">2856</h3>
            <p className="text-gray-500">Total Reps</p>
          </div>
        </div>

        <div className="bg-background dark:bg-gray-800 flex items-center rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300">
          <span className="text-amber-500 p-4">
            <TrendingUp size={35} />
          </span>
          <div>
            <h3 className="text-xl font-bold">22</h3>
            <p className="text-gray-500">Max Pull-ups</p>
          </div>
        </div>

        <div className="bg-background dark:bg-gray-800 flex items-center rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300">
          <span className="text-amber-500 p-4">
            <Calendar size={35} />
          </span>
          <div>
            <h3 className="text-xl font-bold">15</h3>
            <p className="text-gray-500">Current Streak</p>
          </div>
        </div>
      </div>

      {/* Progress Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        
        {/* Weekly Progress */}
        <div className="bg-background dark:bg-gray-800 shadow-xl  hover:shadow-2xl duration-300 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="text-amber-600" size={24} />
            <h3 className="text-lg font-semibold">Weekly Workout Frequency</h3>
          </div>
          <div className="space-y-4">
            {weeklyProgress.map((week, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{week.week}</span>
                  <span>{week.workouts} Workouts</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-amber-600 h-2 transition-all duration-500"
                    style={{ width: `${(week.workouts / 7) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Monthly Progress */}
        <div className="bg-background dark:bg-gray-800 shadow-xl  hover:shadow-2xl duration-300 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="text-amber-600" size={24} />
            <h3 className="text-lg font-semibold">Monthly Workout Frequency</h3>
          </div>
          <div className="space-y-4">
            {monthlyProgress.map((month, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{month.month}</span>
                  <span>{month.workouts} Workouts</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-amber-600 h-2 transition-all duration-500"
                    style={{ width: `${(month.workouts / 18) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercise Type Distribution */}
        <div className="bg-background dark:bg-gray-800 shadow-xl hover:shadow-2xl duration-300 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="text-amber-600" size={24} />
            <h3 className="text-lg font-semibold">
              Exercise Type Distribution
            </h3>
          </div>
          <div className="space-y-4">
            {exerciseTypes.map((exercise, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{exercise.type}</span>
                  <span>{exercise.count}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-amber-600 h-2 transition-all duration-500"
                    style={{
                      width: `${(exercise.count / maxExerciseCount) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

                {/* Achievements */}
                <div className="bg-background dark:bg-gray-800 shadow-xl  hover:shadow-2xl duration-300 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Achievements</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex gap-2">
              {" "}
              <Trophy className="text-amber-500" /> Completed 7-Day Starter
              Challenge
            </li>
            <li className="flex gap-2">
              <Flame className="text-amber-500" /> 15-Day Workout Streak
            </li>
            <li className="flex gap-2">
              <BicepsFlexed className="text-amber-500" /> Improved pull-ups by
              10 reps
            </li>
            <li className="flex gap-2">
              <TargetIcon className="text-amber-500" /> Hit 2856 total reps
              milestone
            </li>
          </ul>
        </div>
      </div>
      <div className=" items-center gap-2 mb-4 bg-background dark:bg-gray-800 w-full mt-8 max-w-6xl rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
        <h2 className="p-5 font-semibold text-xl">Personal Records</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-lg m-4 shadow-md hover:shadow-lg duration-300 ">
            <h3 className="font-semibold"> Pull Ups</h3>
            <p className="text-3xl font-bold text-primary mb-1">22</p>
            <p className="text-sm text-muted-foreground">Personal Best</p>
          </div>
          <div className="text-center p-4  rounded-lg m-4 shadow-md hover:shadow-lg duration-300">
            <h3 className="font-semibold">Push-ups</h3>
            <p className="text-3xl font-bold text-primary mb-1">150</p>
            <p className="text-sm text-muted-foreground">Personal Best</p>
          </div>
          <div className="text-center p-4 rounded-lg m-4 shadow-md hover:shadow-lg duration-300">
            <h3 className="font-semibold">Squats</h3>
            <p className="text-3xl font-bold text-primary mb-1">200</p>
            <p className="text-sm text-muted-foreground">Personal Best</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-12">
        <button
          className="border bg-amber-500 p-2 rounded-md pl-3 pr-3 hover:bg-amber-400 shadow-sm hover:shadow-md transition duration-300"
          onClick={() => navigate("/workouts")}
        >
          Continue Training
        </button>
        <button
          className="border bg-background p-2 rounded-md pl-3 pr-3 shadow-sm hover:shadow-md transition duration-300 dark:bg-gray-800"
          onClick={() => navigate("/challenges")}
        >
          Take a Challenge
        </button>
      </div>
    </div>
  );
};

export default Progress;
