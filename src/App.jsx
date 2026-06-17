import React, { useState, useEffect } from 'react';
import { Eye, Brain, Network, Sparkles, ChevronRight, Activity, Moon, Sun } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-navy text-navy dark:text-white font-sans relative selection:bg-teal selection:text-white transition-colors duration-500">
      
      {/* Dark Mode Toggle */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-gray-200/60 dark:border-white/20 shadow-sm transition-all hover:scale-110"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-navy" />}
      </button>

      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal/5 dark:bg-teal/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] transition-colors duration-500" />

      {/* Main Content Area */}
      <main className="relative flex-grow container mx-auto px-6 py-20 md:py-32 max-w-6xl flex flex-col items-center z-10">
        
        {/* 1. Hero Section */}
        <section className="w-full flex flex-col items-center text-center mb-32 mt-8 animate-fade-in-up">
          <div className="mb-12">
            {/* Logo */}
            <div className="w-20 h-20 bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] rounded-2xl flex items-center justify-center mb-8 mx-auto relative group cursor-pointer transition-transform hover:scale-105">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src="/logo.png" alt="ThinkVIQ Logo" className="w-12 h-12 object-contain relative z-10" />
            </div>
          </div>
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-navy/5 dark:bg-white/5 border border-navy/10 dark:border-white/10 mb-8 backdrop-blur-md transition-colors duration-500">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-xs font-semibold tracking-widest uppercase text-navy/80 dark:text-white/80">ThinkVIQ Infrastructure</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight max-w-5xl leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-navy to-navy/70 dark:from-white dark:to-white/70 transition-colors duration-500">
            Building AI that <br className="hidden md:block"/> sees, thinks, and acts.
          </h1>
          
          <p className="text-lg md:text-xl text-navy/60 dark:text-white/60 max-w-2xl font-medium tracking-tight mb-10 transition-colors duration-500">
            Enterprise-grade artificial intelligence infrastructure designed for scale, precision, and autonomy.
          </p>
        </section>

        {/* 2. Focus Areas (3-Column Grid) */}
        <section className="w-full mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-navy/50 to-transparent pointer-events-none transition-colors duration-500" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { title: 'Computer Vision', icon: Eye, desc: 'Advanced visual perception models for real-world understanding.' },
              { title: 'Generative AI', icon: Sparkles, desc: 'High-fidelity generative systems constrained for enterprise use.' },
              { title: 'Agentic Systems', icon: Network, desc: 'Autonomous multi-agent networks executing complex workflows.' }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 hover:border-teal/30 dark:hover:border-teal/50 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-500 hover:shadow-[0_8px_40px_rgb(45,143,143,0.08)] dark:hover:shadow-[0_8px_40px_rgb(45,143,143,0.15)] flex flex-col items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-navy/5 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-teal/10 dark:group-hover:bg-teal/20 group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-navy dark:text-white group-hover:text-teal dark:group-hover:text-teal transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 font-mono tracking-tight text-navy dark:text-white transition-colors duration-500">{feature.title}</h3>
                <p className="text-navy/60 dark:text-white/60 text-sm font-medium leading-relaxed transition-colors duration-500">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. "Currently Building" Section */}
        <section className="w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
             <h2 className="text-sm font-bold tracking-widest uppercase text-navy/40 dark:text-white/40 flex items-center transition-colors duration-500">
               <Activity className="w-4 h-4 mr-2" />
               Active R&D Pipelines
             </h2>
          </div>
          
          <div className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm overflow-hidden shadow-sm transition-colors duration-500">
             <div className="flex flex-col">
                {/* Project A */}
                <div className="group flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-default">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-teal shadow-[0_0_8px_rgba(45,143,143,0.6)] animate-pulse"></div>
                    <span className="font-mono font-bold text-lg tracking-tight text-navy dark:text-white transition-colors duration-500">RULEN</span>
                  </div>
                  <div className="flex items-center text-navy/40 dark:text-white/40 group-hover:text-teal dark:group-hover:text-teal transition-colors">
                    <span className="text-xs uppercase tracking-wider font-semibold mr-2">Core System</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Project B */}
                <div className="group flex items-center justify-between p-6 hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-default">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-teal shadow-[0_0_8px_rgba(45,143,143,0.6)] animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="font-mono font-bold text-lg tracking-tight text-navy dark:text-white transition-colors duration-500">InsightVision</span>
                  </div>
                  <div className="flex items-center text-navy/40 dark:text-white/40 group-hover:text-teal dark:group-hover:text-teal transition-colors">
                    <span className="text-xs uppercase tracking-wider font-semibold mr-2">Vision Model</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* 4. Footer / Contact */}
      <footer className="w-full border-t border-gray-200/60 dark:border-white/10 mt-auto bg-white/50 dark:bg-navy/50 backdrop-blur-md z-10 relative transition-colors duration-500">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm font-semibold">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="https://linkedin.com/company/thinkviq" target="_blank" rel="noopener noreferrer" className="text-navy/60 dark:text-white/60 hover:text-teal dark:hover:text-teal transition-colors tracking-tight">
              LinkedIn
            </a>
            <a href="https://github.com/ThinkVIQ" target="_blank" rel="noopener noreferrer" className="text-navy/60 dark:text-white/60 hover:text-teal dark:hover:text-teal transition-colors tracking-tight">
              GitHub
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-navy/30 dark:text-white/30 transition-colors duration-500">|</span>
            <a href="mailto:hello@thinkviq.com" className="text-navy/60 dark:text-white/60 hover:text-teal dark:hover:text-teal transition-colors font-mono">
              hello@thinkviq.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
