import { useState } from "react";
import Form from "./Form";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
          {/* Floating shapes */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* String art elements */}
        <div className="absolute inset-0 opacity-20">
          {/* Horizontal strings */}
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-full h-px bg-white/30"
              style={{ top: `${(i + 1) * 10}%` }}
            ></div>
          ))}
          {/* Vertical strings */}
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="absolute h-full w-px bg-white/30"
              style={{ left: `${(i + 1) * 10}%` }}
            ></div>
          ))}
          {/* Diagonal strings */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.1)_50%,transparent_51%)] bg-[length:50px_50px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_49%,rgba(255,255,255,0.1)_50%,transparent_51%)] bg-[length:50px_50px]"></div>
        </div>

        <div className="relative z-30 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="text-center md:text-left md:w-1/2 animate-fade-in-right">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to <span className="text-amber-400">StringCraft</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Weave your digital presence with our elegant solutions. Connect, create, and collaborate like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Get Started
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
            
            {/* Features list */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Seamless Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Advanced Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Real-time Collaboration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span>Customizable Templates</span>
              </div>
            </div>
          </div>
          
          {/* Form container with toggle */}
          <div className="w-full md:w-96 bg-white/10 backdrop-blur-md rounded-3xl p-1 border border-white/20 shadow-2xl animate-fade-in-left">
            {/* Toggle between login and register */}
            <div className="flex bg-white/5 rounded-2xl p-1 mb-6">
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 rounded-2xl text-center font-medium transition-all ${!isLogin ? 'bg-amber-500 text-white shadow' : 'text-white/70 hover:text-white'}`}
              >
                Register
              </button>
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 rounded-2xl text-center font-medium transition-all ${isLogin ? 'bg-blue-500 text-white shadow' : 'text-white/70 hover:text-white'}`}
              >
                Login
              </button>
            </div>
            
            {/* Form */}
            <div className="px-6 pb-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </h2>
              
              {isLogin ? (
                // Login Form
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    />
                  </div>
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
                // Registration Form
                <Form />
              )}
              
              {/* Social login */}
              <div className="mt-6">
                {/* <div className="relative flex items-center">
                  <div className="flex-grow border-t border-white/20"></div>
                  <span className="flex-shrink mx-4 text-white/60 text-sm">Or continue with</span>
                  <div className="flex-grow border-t border-white/20"></div>
                </div> */}
                
                {/* <div className="grid grid-cols-3 gap-3 mt-4">
                  <button className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Landing;