import './Controls.css'

function Controls({ isPlaying, onPlay, onStop }) {
  return (
    <div className="controls">
      <button 
        className={`control-button play-button ${isPlaying ? 'active' : ''}`}
        onClick={onPlay}
        disabled={isPlaying}
      >
        ▶ Play
      </button>
      <button 
        className="control-button stop-button"
        onClick={onStop}
        disabled={!isPlaying}
      >
        ■ Stop
      </button>
      {isPlaying && <div className="playing-indicator">🎵 Playing...</div>}
    </div>
  )
}

export default Controls
