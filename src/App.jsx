import { useState, useRef, useEffect } from 'react'
import './App.css'
import LiveCodeEditor from './components/LiveCodeEditor'
import Controls from './components/Controls'
import * as Tone from 'tone'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [code, setCode] = useState('const synth = new Tone.Synth().toDestination();\nconst now = Tone.now();\nsynth.triggerAttackRelease("C4", "8n", now);\nsynth.triggerAttackRelease("E4", "8n", now + 0.5);\nsynth.triggerAttackRelease("G4", "8n", now + 1);\nsynth.triggerAttackRelease("B4", "8n", now + 1.5);')
  const [error, setError] = useState(null)
  const cleanupRef = useRef(null)

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
      }
    }
  }, [])

  const evaluateCode = async (codeToEvaluate) => {
    try {
      setError(null)
      
      // Start Tone.js audio context
      await Tone.start()
      
      // Stop any previously playing sounds
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = null
      }

      if (!codeToEvaluate.trim()) {
        return
      }

      // Create a function with Tone in scope
      const evalFunction = new Function('Tone', codeToEvaluate)
      
      // Execute the code
      evalFunction(Tone)
      
      // Set up cleanup to dispose all synths after some time
      const timeoutId = setTimeout(() => {
        Tone.Transport.stop()
        Tone.Transport.cancel()
      }, 10000) // Stop after 10 seconds
      
      cleanupRef.current = () => {
        clearTimeout(timeoutId)
        Tone.Transport.stop()
        Tone.Transport.cancel()
      }
      
      setIsPlaying(true)
      
      // Auto-stop after the pattern completes
      setTimeout(() => {
        setIsPlaying(false)
      }, 10000)
    } catch (err) {
      setError(err.message)
      console.error('Evaluation error:', err)
      setIsPlaying(false)
    }
  }

  const handlePlay = () => {
    evaluateCode(code)
  }

  const handleStop = () => {
    if (cleanupRef.current) {
      cleanupRef.current()
      cleanupRef.current = null
    }
    Tone.Transport.stop()
    Tone.Transport.cancel()
    setIsPlaying(false)
    setError(null)
  }

  const handleCodeChange = (newCode) => {
    setCode(newCode)
  }

  const handleEvaluate = () => {
    evaluateCode(code)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎵 Live Coding Music</h1>
        <p className="subtitle">Powered by Tone.js and Web Audio API</p>
      </header>
      
      <main className="app-main">
        <LiveCodeEditor 
          code={code}
          onChange={handleCodeChange}
          onEvaluate={handleEvaluate}
        />
        
        {error && (
          <div className="error-message">
            <strong>Error:</strong> {error}
          </div>
        )}
        
        <Controls 
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onStop={handleStop}
        />
        
        <div className="info-section">
          <h3>Getting Started</h3>
          <p>Try these Tone.js examples:</p>
          <ul>
            <li><code>const synth = new Tone.Synth().toDestination(); synth.triggerAttackRelease("C4", "8n");</code> - Simple note</li>
            <li><code>const synth = new Tone.FMSynth().toDestination(); synth.triggerAttackRelease("G3", "2n");</code> - FM synthesis</li>
            <li><code>const sampler = new Tone.Sampler().toDestination();</code> - Sampler</li>
            <li><code>const part = new Tone.Part((time, note) =&gt; &#123; const synth = new Tone.Synth().toDestination(); synth.triggerAttackRelease(note, "8n", time); &#125;, [["0:0", "C4"], ["0:1", "E4"], ["0:2", "G4"]]); part.start(); Tone.Transport.start();</code> - Sequence</li>
          </ul>
          <p className="hint">Press <kbd>Ctrl/Cmd + Enter</kbd> to evaluate your code!</p>
        </div>
      </main>
    </div>
  )
}

export default App
