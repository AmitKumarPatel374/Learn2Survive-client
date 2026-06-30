import React from 'react'

const DashboardFooter = () => {
  return (
    <footer className="ml-80 border-t border-white/10 bg-[#0b1326]/70 backdrop-blur-xl">
      <div className="flex h-14 items-center justify-between px-8 text-sm text-[#8e909f]">

        <p>
          © 2026 Learn2Survive. All rights reserved.
        </p>

        <div className="flex items-center gap-6">

          <button className="hover:text-white transition">
            Privacy
          </button>

          <button className="hover:text-white transition">
            Terms
          </button>

          <button className="hover:text-white transition">
            Support
          </button>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Online</span>
          </div>

          <span className="text-[#6f7791]">
            v2.4
          </span>

        </div>

      </div>
    </footer>
  );
};


export default DashboardFooter
