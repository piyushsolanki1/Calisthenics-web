const mealPlans = {
    maintenance: {
      title: "Maintenance Plan",
      calories: "2000-2200",
      description: "Balanced nutrition to maintain your current weight while supporting your calisthenics training",
      protein: "120-140g",
      carbs: "250-280g",
      fat: "65-80g"
    },
    bulking: {
      title: "Muscle Gain Plan",
      calories: "2400-2600",
      description: "Higher calorie intake to support muscle growth and strength gains",
      protein: "140-160g",
      carbs: "300-350g", 
      fat: "80-100g"
    },
    cutting: {
      title: "Fat Loss Plan",
      calories: "1600-1800",
      description: "Calorie deficit while maintaining muscle mass during training",
      protein: "130-150g",
      carbs: "150-200g",
      fat: "50-70g"
    }
  };

  const meals = {
    breakfast: [
      {
        id: 1,
        name: "Protein Overnight Oats",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM0MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 450,
        prepTime: "5 min",
        protein: "25g",
        ingredients: ["Rolled oats", "Greek yogurt", "Protein powder", "Berries", "Chia seeds", "Almond milk"]
      },
      {
        id: 2,
        name: "Avocado Toast with Eggs",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM0MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 520,
        prepTime: "10 min",
        protein: "22g",
        ingredients: ["Whole grain bread", "Avocado", "Eggs", "Spinach", "Tomato", "Hemp seeds"]
      },
      {
        id: 3,
        name: "Green Smoothie Bowl",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM0MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 380,
        prepTime: "5 min",
        protein: "20g",
        ingredients: ["Spinach", "Banana", "Protein powder", "Almond butter", "Coconut flakes"]
      }
    ],
    lunch: [
      {
        id: 4,
        name: "Quinoa Buddha Bowl",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM0MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 580,
        prepTime: "15 min",
        protein: "28g",
        ingredients: ["Quinoa", "Chickpeas", "Sweet potato", "Kale", "Tahini dressing", "Pumpkin seeds"]
      },
      {
        id: 5,
        name: "Lentil & Vegetable Curry",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM0MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 520,
        prepTime: "25 min",
        protein: "24g",
        ingredients: ["Red lentils", "Coconut milk", "Vegetables", "Brown rice", "Curry spices"]
      },
      {
        id: 6,
        name: "Mediterranean Wrap",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM0MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 480,
        prepTime: "10 min",
        protein: "22g",
        ingredients: ["Whole wheat tortilla", "Hummus", "Grilled vegetables", "Feta cheese", "Olives"]
      }
    ],
    dinner: [
      {
        id: 7,
        name: "Stuffed Bell Peppers",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM0MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 420,
        prepTime: "30 min",
        protein: "18g",
        ingredients: ["Bell peppers", "Black beans", "Quinoa", "Vegetables", "Nutritional yeast"]
      },
      {
        id: 8,
        name: "Zucchini Noodle Pasta",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM4MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 380,
        prepTime: "20 min",
        protein: "16g",
        ingredients: ["Zucchini", "Cashew cream", "Mushrooms", "Spinach", "Pine nuts"]
      },
      {
        id: 9,
        name: "Tofu Stir Fry",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM4MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 460,
        prepTime: "15 min",
        protein: "26g",
        ingredients: ["Extra firm tofu", "Mixed vegetables", "Brown rice", "Soy sauce", "Sesame oil"]
      }
    ],
    snacks: [
      {
        id: 10,
        name: "Protein Energy Balls",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM4MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 180,
        prepTime: "10 min",
        protein: "8g",
        ingredients: ["Dates", "Almonds", "Protein powder", "Coconut", "Cacao powder"]
      },
      {
        id: 11,
        name: "Greek Yogurt Parfait",
        image: "https://images.unsplash.com/photo-1597564688803-2ff328ea65c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWxzfGVufDF8fHx8MTc1ODM4MzM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        calories: 220,
        prepTime: "5 min",
        protein: "15g",
        ingredients: ["Greek yogurt", "Granola", "Fresh berries", "Honey", "Nuts"]
      }
    ]
  };

  const nutritionTips = [
    {
      title: "Pre-Workout Fuel",
      tip: "Eat a banana with almond butter 30-60 minutes before training for sustained energy."
    },
    {
      title: "Post-Workout Recovery",
      tip: "Consume protein within 30 minutes after training to optimize muscle recovery and growth."
    },
    {
      title: "Stay Hydrated",
      tip: "Drink at least 2-3 liters of water daily, more if you're training intensely."
    },
    {
      title: "Meal Timing",
      tip: "Space your meals 3-4 hours apart to maintain steady energy levels throughout the day."
    }
  ];
  export { meals, nutritionTips,mealPlans };