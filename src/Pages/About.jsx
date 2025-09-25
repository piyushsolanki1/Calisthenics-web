import { Heart, Target, Users, Zap, CheckCircle, Award } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const benefits = [
    "No expensive gym memberships required",
    "Train anywhere, anytime with just your bodyweight",
    "Builds functional strength and mobility",
    "Suitable for all fitness levels",
    "Progressive workout programs",
    "Comprehensive nutrition guidance",
    "Track your progress and achievements",
    "Join a supportive community",
  ];

  return (
    <div className="min-h-screen p-0 m-0">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
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
            About{" "}
            <span className="text-primary  ">Calisthenics</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Empowering people worldwide to unlock their potential through
            calisthenics
          </p>
        </div>
      </section>
      <div className="text-center mt-12 max-w-5xl mx-auto">
        <h1 className="text-4xl mb-6">Our Mission</h1>
        <p className="text-xl">
          We're on a mission to make fitness accessible, effective, and
          enjoyable for everyone. Through the power of calisthenics, we help
          people build not just physical strength, but confidence, discipline,
          and a lifelong love for movement.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto text-center gap-5 m-10">
        <div className="bg-background dark:bg-gray-800 rounded-xl p-10 shadow-md hover:shadow-lg transition duration-200">
          <p className="text-4xl text-amber-600 font-bold">50k+</p>
          <p>Active Users</p>
        </div>
        <div className="bg-background dark:bg-gray-800 rounded-xl p-10 shadow-md hover:shadow-lg transition duration-200">
          <p className="text-4xl text-amber-600 font-bold">10m+</p>
          <p>Workouts Completed</p>
        </div>
        <div className="bg-background dark:bg-gray-800 rounded-xl p-10 shadow-md hover:shadow-lg transition duration-200">
          <p className="text-4xl text-amber-600 font-bold">90%</p>
          <p>User Satisfaction</p>
        </div>
        <div className="bg-background dark:bg-gray-800 rounded-xl p-10 shadow-md hover:shadow-lg transition duration-200">
          <p className="text-4xl  text-amber-600 font-bold">24/7</p>
          <p>Community Support</p>
        </div>
      </div>
      <div className="bg-muted/45 dark:bg-gray-800 max-w-6xl mx-auto rounded-xl m-10 p-6 ">
        <div className="p-12 text-center">
          <h1 className="text-4xl mb-6 text-foreground font-bold">
            Our Values
          </h1>
          <p className="text-xl text-gray-500">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-12">
          <div className="p-6 bg-background dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition duration-200">
            <div className="flex gap-2">
              <span>
                <Heart size={30} className="text-amber-500" />
              </span>
              <h3>Accessibility for All</h3>
            </div>
            <p className="pl-9 text-muted-foreground">
              We believe fitness should be accessible to everyone, regardless of
              equipment, budget, or experience level.
            </p>
          </div>
          <div className="p-6 bg-background dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition duration-200">
            <div className="flex gap-2">
              <span>
                <Target size={30} className="text-amber-500" />
              </span>
              <h3>Progressive Excellence</h3>
            </div>
            <p className="pl-9 text-muted-foreground">
            Every workout is designed with progression in mind, helping you continuously improve and achieve new goals.
            </p>
          </div>
          <div className="p-6 bg-background dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition duration-200">
            <div className="flex gap-2">
              <span>
                <Users size={30} className="text-amber-500" />
              </span>
              <h3>Community Support</h3>
            </div>
            <p className="pl-9 text-muted-foreground">
            Building a supportive community where everyone can share their journey and motivate each other.
            </p>
          </div>
          <div className="p-6 bg-background dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition duration-200">
            <div className="flex gap-2">
              <span>
                <Zap size={30} className="text-amber-500" />
              </span>
              <h3>Functional Strength</h3>
            </div>
            <p className="pl-9 text-muted-foreground">
            Focus on building real-world strength and movement patterns that translate to everyday life.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-background rounded-xl max-w-6xl mx-auto grid lg:grid-cols-2 p-3 gap-3">
        <div className="">
          <div>
            <h1 className="text-4xl pb-4"> Why Calisthenics ?</h1>
            <p className="text-muted-foreground pb-8">
              Calisthenics is more than just exercise—it's a philosophy of
              movement that has been practiced for thousands of years. From
              ancient Greek warriors to modern athletes, bodyweight training has
              proven to be one of the most effective ways to build strength,
              flexibility, and coordination.
            </p>
          </div>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1701826510552-aadcfa841065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWxsLXVwJTIwYmFyJTIwZXhlcmNpc2V8ZW58MXx8fHwxNzU4MzQzMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Calisthenics training"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="bg-muted/40 dark:bg-gray-800 max-w-6xl mx-auto rounded-xl m-12">
        <div className="text-center p-12 max-w-5xl mx-auto">
          <h1 className="text-4xl m-4">Built by Athletes, for Athletes</h1>
          <p className="text-muted-foreground">
            Our team consists of certified trainers, nutritionists, and
            passionate calisthenics practitioners who understand the challenges
            and rewards of bodyweight training. We've designed every aspect of
            CalistheFit based on real-world experience and scientific
            principles.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 max-w-5xl mx-auto">
          <div className=" border text-center rounded-xl m-8 p-10 shadow-xl ">
            <span className="flex justify-center">
              <Award size={40} className="text-amber-500"/>
            </span>
            <h3 className="p-3">Certified Trainers</h3>
            <p className="text-muted-foreground">All our programs are designed by certified fitness professionals</p>
          </div>
          <div className=" border text-center rounded-xl m-8 p-10 shadow-xl ">
            <span className="flex justify-center">
              <Target size={40} className="text-amber-500"/>
            </span>
            <h3 className="p-3">Certified Trainers</h3>
            <p className="text-muted-foreground">All our programs are designed by certified fitness professionals</p>
          </div>
          <div className=" border text-center rounded-xl m-8 p-10 shadow-xl ">
            <span className="flex justify-center">
              <Users size={40} className="text-amber-500"/>
            </span>
            <h3 className="p-3">Certified Trainers</h3>
            <p className="text-muted-foreground">All our programs are designed by certified fitness professionals</p>
          </div>
        </div>
      </div>


      <div className="bg-primary/5 dark:bg-gray-800  border rounded-xl max-w-5xl mx-auto text-center p-12 m-12">
      <h2 className="text-4xl p-4">Ready to Start Your Journey?</h2>
      <p className="text-muted-foreground">Join thousands of people who have transformed their bodies and minds through calisthenics. Your journey to a stronger, healthier you starts here.</p>
      <div className="flex justify-center gap-4 mt-12">
        <button
          className="border bg-amber-500 p-2 rounded-md pl-3 pr-3 hover:bg-amber-600 shadow-sm hover:shadow-md transition duration-300"
          onClick={() => navigate("/workouts")}
        >
          Start Training Today
        </button>
        <button
          className="border bg-background p-2 rounded-md pl-3 pr-3 hover:bg-amber-500 transition duration-300 dark:bg-gray-800"
          onClick={() => navigate("/challenges")}
        >
          Take a Challenge
        </button>
      </div>
      </div>

    </div>
  );
};

export default About;
