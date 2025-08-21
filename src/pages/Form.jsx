const Form = () => (
  <form className="space-y-4">
    <div>
      <label className="block text-white/80 text-sm mb-2">Name</label>
      <input
        type="text"
        placeholder="Your name"
        className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      />
    </div>
    <div>
      <label className="block text-white/80 text-sm mb-2">Email</label>
      <input
        type="email"
        placeholder="Your email"
        className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      />
    </div>
    <div>
      <label className="block text-white/80 text-sm mb-2">Password</label>
      <input
        type="password"
        placeholder="Create a password"
        className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
      />
    </div>
    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] mt-4">
      Register
    </button>
  </form>
);
export default Form;
