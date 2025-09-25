import { useState } from "react";
import { meals,mealPlans, nutritionTips  } from "../Data/mealPlans";
import { useNavigate } from "react-router-dom";
function Nutrition({ onPageChange }) {
  const [selectedPlan, setSelectedPlan] = useState("maintenance");
  const [selectedTab, setSelectedTab] = useState("breakfast");

  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center m-12">
          <h1 className="text-4xl font-bold mb-2">Vegetarian Nutrition</h1>
          <p className="text-gray-600 text-lg">
            Plant-powered nutrition to fuel your training and recovery
          </p>
        </div>

        {/* Meal Plans */}
        <h2 className="text-2xl font-semibold mb-4">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10 ">
          {Object.entries(mealPlans).map(([key, plan]) => (
            <div
              key={key}
              onClick={() => setSelectedPlan(key)}
              className={`p-4 shadow-md border-2 rounded-lg cursor-pointer hover:shadow-xl duration-200 transition bg-background dark:bg-gray-800 ${
                selectedPlan === key ? "border-amber-500" : "border-white"
              }`}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{plan.title}</h3>
                <span className="text-sm bg-amber-500 text-white px-2 py-1 rounded">
                  {plan.calories} cal
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{plan.description}</p>
              <div className="text-sm space-y-1">
                <p>Protein: <span className="font-medium">{plan.protein}</span></p>
                <p>Carbs: <span className="font-medium">{plan.carbs}</span></p>
                <p>Fat: <span className="font-medium">{plan.fat}</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 space-x-4 mb-6 bg-background shadow-xl rounded-xl">
            {["breakfast", "lunch", "dinner", "snacks"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium m-2 ${
                  selectedTab === tab
                    ? "bg-amber-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Meals */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {meals[selectedTab].map((meal) => (
              <div key={meal.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition bg-background dark:bg-gray-800 ">
                <img src={meal.image} alt={meal.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{meal.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">Calories: {meal.calories} | Protein: {meal.protein}</p>
                  <p className="text-muted-foreground text-sm mb-3">Prep Time: {meal.prepTime}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {meal.ingredients.slice(0, 4).map((ingredient, index) => (
                      <span key={index} className="px-2 py-1 bg-background dark:bg-gray-700 shadow-sm rounded-md">
                        {ingredient}
                      </span>
                    ))}
                    {meal.ingredients.length > 4 && (
                      <span className="px-2 py-1 bg-background dark:bg-gray-700 shadow-sm rounded-md">
                        +{meal.ingredients.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nutrition Tips */}
       <div className="bg-background dark:bg-gray-800 shadow-md p-8 rounded-xl">
       <h2 className="text-2xl font-semibold mb-4">Nutrition Tips</h2>
        <div className="grid md:grid-cols-2 gap-6 text-foreground">
          {nutritionTips.map((tip, index) => (
            <div key={index} className="p-4 rounded-lg bg-background dark:bg-gray-700 shadow-md">
              <h3 className="font-semibold mb-1 text-foreground">{tip.title}</h3>
              <p className="text-muted-foreground text-sm">{tip.tip}</p>
            </div>
          ))}
        </div>
       </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-amber-50 p-12 border-2 rounded-xl border-amber-100 dark:bg-gray-800 dark:border-none">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Ready to Fuel Your Training?</h2> 
          <p className="text-muted-foreground text-lg p-3">Proper nutrition is just as important as your workouts. Start with these meal plans and adjust based on your goals.
          </p>

          <div className="mt-12 grid lg:grid-cols-2 gap-4 max-w-xl mx-auto">
          <button
            onClick={() => navigate("/workouts")}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition"
          >
            Start Training
          </button>

          <button
            onClick={() => navigate("#")}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition"
          >
           Download meal plans
          </button>
        </div>
        </div>
       
        </div>
      </div>
  );
}


export default Nutrition