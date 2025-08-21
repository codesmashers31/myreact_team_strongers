import { useState } from "react";
import Form from "./Form"; // your registration form component

const features = [
  "Live Coding Bootcamps",
  "Real Project Experience",
  "1:1 Mentorship & Support",
  "Job-Ready Skills",
];

export default function Landing() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* BG & cool effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-2000" />

      {/* Main content container */}
      <div className="relative z-30 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Hero Information */}
        <div className="text-center md:text-left md:w-1/2 animate-fade-in-right">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Supercharge Your Coding Career
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto md:mx-0">
            Full-stack. AI. Job-ready. <br />
            <span className="text-amber-200">Learn by building, level up by doing.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Join Free Training
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105">
              See Curriculum
            </button>
          </div>
          {/* Features */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80">
            {features.map(f => (
              <div key={f} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"/>
                <span className="font-semibold">{f}</span>
              </div>
            ))}
          </div>
          {/* Coding badges */}
          <div className="mt-8 flex gap-2 flex-wrap">
            {['#React', '#Node', '#Mentor', '#CareerLeap', '#Hackathons'].map((s,i) => (
              <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-amber-200 text-xs font-mono">{s}</span>
            ))}
          </div>
        </div>

        {/* Auth Card */}
        <div className="w-full md:w-96 bg-white/10 backdrop-blur-md rounded-3xl p-1 border border-white/20 shadow-2xl animate-fade-in-left">
          {/* Toggle */}
          <div className="flex bg-white/5 rounded-2xl p-1 mb-6">
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-2xl text-center font-medium transition-all ${!isLogin ? 'bg-amber-500 text-white shadow' : 'text-white/70 hover:text-white'}`}>
              Register
            </button>
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-2xl text-center font-medium transition-all ${isLogin ? 'bg-blue-500 text-white shadow' : 'text-white/70 hover:text-white'}`}>
              Login
            </button>
          </div>
          {/* Form */}
          <div className="px-6 pb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>
            {isLogin ? (
              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-white/80 text-sm mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                {/* Password */}
                <div>
                  <label className="block text-white/80 text-sm mb-2">Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center text-white/80 text-sm">
                    <input type="checkbox" className="rounded bg-white/10 border-white/20 text-amber-500 focus:ring-amber-500" />
                    <span className="ml-2">Remember me</span>
                  </label>
                  <a href="#" className="text-amber-400 text-sm hover:underline">Forgot password?</a>
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] mt-4">
                  Sign In
                </button>
              </div>
            ) : (
              <Form />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
