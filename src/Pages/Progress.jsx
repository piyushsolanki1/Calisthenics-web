import React from 'react'
import { Zap, Clock, TrendingUp, Calendar } from 'lucide-react'

const Progress = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py-10'>
    <div className="text-center m-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
          Your Progress
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Track your calisthenics journey and celebrate your achievements

</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-8 mt-12'>
        <div className=' bg-background flex justify-start rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300'>
          <span className='text-amber-500 p-4 justify-start'><Zap size={35}/></span>
         <div>
         <h3>85</h3>
          <p className='text-gray-500'>Total Workout</p>
         </div>
        </div>
        <div className=' bg-background flex justify-start rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300'>
          <span className='text-amber-500 p-4 justify-start'><Clock size={35}/></span>
         <div>
         <h3>2856</h3>
          <p className='text-gray-500'>Total Reps</p>
         </div>
        </div>
        <div className=' bg-background flex justify-start rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300'>
          <span className='text-amber-500 p-4 justify-start'><TrendingUp size={35}/></span>
         <div>
         <h3>22</h3>
          <p className='text-gray-500'>Max Pull-ups</p>
         </div>
        </div>
        <div className=' bg-background flex justify-start rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300'>
          <span className='text-amber-500 p-4 justify-start'><Calendar size={35}/></span>
         <div>
         <h3>15</h3>
          <p className='text-gray-500'>Current Streak</p>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Progress