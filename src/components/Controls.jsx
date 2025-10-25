function Controls({ isPlaying, onPlay, onStop }) {
  return (
    <div className="bg-dj-panel rounded-xl border border-gray-800 shadow-panel p-6">
      <div className="flex items-center justify-center space-x-4">
        <button 
          className={`
            group relative px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider
            transition-all duration-200 transform
            ${isPlaying 
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-dj-accent to-emerald-500 hover:from-dj-accent-dark hover:to-emerald-600 text-black shadow-neon hover:shadow-neon-strong hover:scale-105 active:scale-95'
            }
          `}
          onClick={onPlay}
          disabled={isPlaying}
        >
          <span className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
            <span>Execute</span>
          </span>
        </button>
        
        <button 
          className={`
            group relative px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider
            transition-all duration-200 transform
            ${!isPlaying 
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white hover:scale-105 active:scale-95'
            }
          `}
          onClick={onStop}
          disabled={!isPlaying}
        >
          <span className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
            </svg>
            <span>Stop</span>
          </span>
        </button>
      </div>
      
      {isPlaying && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dj-accent/10 border border-dj-accent/30 rounded-lg">
            <div className="relative">
              <div className="w-3 h-3 bg-dj-accent rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-dj-accent rounded-full animate-ping"></div>
            </div>
            <span className="text-sm font-semibold text-dj-accent">Audio Playing...</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Controls
