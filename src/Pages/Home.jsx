import React from "react";
import { useNavigate } from "react-router-dom";
import { Zap, Users, Heart, Star, Quote } from "lucide-react";
import featuredWorkouts from "../Data/featuredWorkouts";
const Home = () => {
  
  const testimonial = {
    quote:
      "CalistheFit transformed my approach to fitness. The progressive workouts helped me achieve my first pull-up in just 8 weeks!",
    author: "Sarah Chen",
    role: "Fitness Enthusiast",
    rating: 5,
  };

  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-0 m-0">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1734188341701-5a0b7575efbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxpc3RoZW5pY3MlMjB3b3Jrb3V0JTIwYm9keXdlaWdodCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc1ODM0MzM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Calisthenics workout background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Poppins']">
            Transform Your Body with{" "}
            <span className="text-primary text-amber-500 ">Calisthenics</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Master bodyweight training with progressive workouts designed for
            every fitness level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              size="lg"
              className="border-1 p-2 pl-8 pr-8 rounded-md bg-amber-500 border-white text-white font-semibold hover:text-black"
              onClick={() => navigate("/workouts")}
            >
              Start Training
            </button>
            <button
              size="lg"
              className="border-1 p-2 pl-8 pr-8 rounded-md border-white text-white font-semibold hover:text-black"
              onClick={() => navigate("/workouts")}
            >
              View Workouts
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Why Choose Calisthenics ?
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the benefits of bodyweight training and transform your
              fitness journey
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 shadow-sm hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 rounded-2xl delay-100 duration-600 ease-in-out hover:-translate-y-0 hover:scale-100">
            <div className="pt-5">
              <span className="flex justify-center mb-4 text-amber-500">
                <Zap />
              </span>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                Strength & Flexibility
              </h2>
              <p className="text-muted-foreground">
                Build functional strength while improving your flexibility and
                mobility through natural movement patterns.
              </p>
            </div>
          </div>

          <div className="text-center p-6 shadow-sm hover:shadow-xl transition-shadow bg-white dark:bg-gray-800 rounded-2xl delay-100 duration-600 ease-in-out hover:-translate-y-0 hover:scale-100">
            <div className="pt-5">
              <span className="flex justify-center mb-4 text-amber-500">
                <Users />
              </span>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                Minimal Equipment{" "}
              </h2>
              <p className="text-muted-foreground">
                Train anywhere, anytime with just your bodyweight. No expensive
                gym memberships or equipment needed.
              </p>
            </div>
          </div>

          <div className="text-center p-6 shadow-sm hover:shadow-xl transition-shadow  bg-white dark:bg-gray-800 rounded-2xl delay-100 duration-600 ease-in-out hover:scale-100">
            <div className="pt-5">
              <span className="flex justify-center mb-4 text-amber-500">
                <Heart />
              </span>
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                Beginner Friendly
              </h2>
              <p className="text-muted-foreground">
                Progressive workouts designed for all fitness levels, from
                complete beginners to advanced athletes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-muted/30">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Featured Workouts
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Try these popular calisthenics exercises
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-15">
              {featuredWorkouts.map((workout) => (
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            className="border-2 rounded-md p-2 pl-3 pr-3 bg-amber-500 text-white dark:text-black font-semibold hover:bg-amber-400"
            onClick={() => navigate("/workouts")}
          >
            View All Workouts
          </button>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className=" max-w-4xl mx-auto text-center">
          <div className="bg-white shadow-sm dark:bg-gray-800 p-8 hover:shadow-xl delay-200 duration-400 rounded-2xl">
            <span>
              <Quote className="h-12 w-12 text-primary mx-auto mb-6 opacity-20 flex justify-center" />
            </span>
            <h2 className="text-2xl font-medium text-foreground mb-6 italic flex justify-center">
              "{testimonial.quote}"
            </h2>
            <div className="flex justify-center mb-4 gap-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <div>
              <p className="font-semibold text-foreground">
                {testimonial.author}
              </p>
              <p className="text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of people transforming their bodies with calisthenics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              size="lg"
              className="px-8 py-3 rounded-xl hover:bg-gray-700 hover:text-primary bg-gray-600 text-white font-semibold transition duration-200"
              onClick={() => navigate("/workouts")}
            >
              Browse Workouts
            </button>
            <button
              size="lg"
              className="border-gray-600 bg-amber-700 hover:bg-amber-800 text-white hover:text-primary px-8 py-3 rounded-xl border-1 font-semibold transition duration-200"
              onClick={() => navigate("/challenges")}
            >
              Take a Challenge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
