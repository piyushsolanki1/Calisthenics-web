import React, { useState } from 'react';
import challengesData from '../Data/Challenges';
import { Watch, BicepsFlexed, Trophy, CheckCircle, Calendar } from 'lucide-react';

const Challenges = () => {
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const filteredChallenges = challengesData.filter(challenge =>
    difficultyFilter === "all" ? true : challenge.difficulty === difficultyFilter
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
 <div className="text-center m-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
          Fitness Challenges
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Push your limits and achieve new goals with our structured challenge programs          </p>
        </div>
      {/* Challenges Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {filteredChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-background dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={challenge.image}
              alt={challenge.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{challenge.title}</h2>
              <p className="text-gray-600 mb-3 text-sm">{challenge.description}</p>

              <div className="flex justify-between text-sm text-gray-700 mb-3">
                <span className='flex '><Watch className='text-amber-500'/> {challenge.duration}</span>
                <span className='flex gap-2 '> <BicepsFlexed className='text-amber-500'/> {challenge.difficulty}</span>
              </div>

              <div className="text-sm mb-3">
                <p><strong>Daily Time:</strong> {challenge.dailyTime}</p>
                <p><strong>Participants:</strong> {challenge.participants}</p>
                <p><strong>Completion Rate:</strong> {challenge.completionRate}%</p>
              </div>

              <div className="mt-3">
                <p className="font-semibold mb-1">Focus Areas:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm font-semibold">
                  {challenge.focus.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Join Challenge
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12'>
        <div className=' bg-background dark:bg-gray-800 flex justify-start rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300'>
          <span className='text-amber-500 p-4 justify-start'><Trophy size={35}/></span>
         <div>
         <h3>2,707</h3>
          <p className='text-gray-500'>Total Participants</p>
         </div>
        </div>
        <div className=' bg-background dark:bg-gray-800 flex justify-start rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300'>
          <span className='text-amber-500 p-4 justify-start'><CheckCircle size={35}/></span>
         <div>
         <h3>75%</h3>
          <p className='text-gray-500'>Average Completion</p>
         </div>
        </div>
        <div className=' bg-background dark:bg-gray-800 flex justify-start rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300'>
          <span className='text-amber-500 p-4 justify-start'><Calendar size={35}/></span>
         <div>
         <h3>19</h3>
          <p className='text-gray-500'>Your Completed Days</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;