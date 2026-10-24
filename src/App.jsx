import { useState } from 'react'
export default function App() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  return (
    <div className = {`${theme} min-h-screen dark:bg-dark-background`}>
      {/* Navbar */}
      <div className="flex justify-between py-3 px-6 bg-slate-900 text-white items-center">
        <div className="font-bold">Logo</div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-5">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span className="cursor-pointer" onClick={theme == 'light' ? ()=>{setTheme('dark')} : ()=>{setTheme('light')}}>
            {theme == 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M8.463 15.538Q7 14.075 7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17t-3.537-1.463M5 13H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21"/></svg>
            )}
          </span>
        </div>
        <button className="sm:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>≡</button>
      </div>
        {/* Mobile Nav */}
        {open && (
          <div className="sm:hidden flex flex-col items-center gap-5 bg-slate-900 text-white p-4">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <span className="cursor-pointer" onClick={theme == 'light' ? ()=>{setTheme('dark')} : ()=>{setTheme('light')}}>
              {theme == 'light' ? (
                <div className='flex gap-[5px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M8.463 15.538Q7 14.075 7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17t-3.537-1.463M5 13H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z"/></svg>
                  <p>Light</p>
                </div>
              ) : (
                <div className='flex gap-[5px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21"/></svg>
                  <p>Dark</p>
                </div>
              )}
            </span>
          </div>
        )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 text-white p-6 gap-6 text-center font-semibold text-2xl sm:text-lg md:text-sm">
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500 cursor-pointer">Feature One</div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500 cursor-pointer">Feature Two</div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500 cursor-pointer">Feature Three</div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500 cursor-pointer">Feature Four</div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500 cursor-pointer">Feature Five</div>
        <div className="bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-105 transition-all duration-500 cursor-pointer">Feature Six</div>
      </div>
    </div>
  )
}

