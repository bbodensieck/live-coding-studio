import { useState, useRef, useEffect } from 'react'
import LiveCodeEditor from './components/LiveCodeEditor'
import Controls from './components/Controls'
import {
  initStrudel,
  evaluateStrudelPattern,
  stopStrudel,
  isStrudelPlaying,
} from './utils/strudelIntegration'
import examples from './examples'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [code, setCode] = useState('note("c3 e3 g3 b3").sound("sawtooth")')
  const [error, setError] = useState(null)
  const cleanupRef = useRef(null)

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current()
      }
      stopStrudel()
    }
  }, [])

  const evaluateCode = async (codeToEvaluate) => {
    try {
      setError(null)

      if (!codeToEvaluate.trim()) {
        return
      }

      // Use Strudel pattern evaluation
      await initStrudel()
      await evaluateStrudelPattern(codeToEvaluate)
      setIsPlaying(true)
      
      // Note: Strudel manages its own playback lifecycle
      // We'll check the playing state periodically
      const checkInterval = setInterval(() => {
        const playing = isStrudelPlaying()
        setIsPlaying(playing)
        if (!playing) {
          clearInterval(checkInterval)
        }
      }, 100)
      
      cleanupRef.current = () => {
        clearInterval(checkInterval)
        stopStrudel()
      }
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
    stopStrudel()
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
    <div className="min-h-screen bg-gradient-to-br from-dj-darker via-dj-dark to-gray-900">
      {/* Top Navigation Bar */}
      <nav className="bg-dj-panel border-b border-gray-800 shadow-panel">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-dj-accent to-dj-purple rounded-lg flex items-center justify-center shadow-neon">
                  <span className="text-2xl">🎵</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight">Live Coding Studio</h1>
                  <p className="text-xs text-gray-400 font-mono">Powered by Strudel & Web Audio API</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-dj-dark rounded-md border border-gray-700">
                <span className="text-xs text-gray-400 font-mono">v1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 gap-6">
          {/* Code Editor Section */}
          <div className="bg-dj-panel rounded-xl border border-gray-800 shadow-panel overflow-hidden">
            <div className="bg-gradient-to-r from-gray-900 to-dj-panel border-b border-gray-800 px-6 py-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Code Editor</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-500 font-mono">Press Ctrl/Cmd + Enter to execute</span>
                  {isPlaying && (
                    <div className="flex items-center space-x-2 px-3 py-1 bg-dj-accent/10 border border-dj-accent/30 rounded-md animate-pulse">
                      <div className="w-2 h-2 bg-dj-accent rounded-full"></div>
                      <span className="text-xs font-semibold text-dj-accent">LIVE</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <LiveCodeEditor 
              code={code}
              onChange={handleCodeChange}
              onEvaluate={handleEvaluate}
            />
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-red-400">Error</h3>
                  <p className="text-sm text-red-300 font-mono mt-1">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Controls */}
          <Controls 
            isPlaying={isPlaying}
            onPlay={handlePlay}
            onStop={handleStop}
          />

          {/* Examples Section */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-dj-panel rounded-xl border border-gray-800 shadow-panel p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <span className="text-dj-accent">⚡</span>
                <span>Examples</span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {examples.map((example) => (
                  <ExampleCard 
                    key={example.id}
                    title={example.title}
                    description={example.description}
                    code={example.code}
                    onUse={() => setCode(example.code)}
                  />
                ))}
              </div>
            </div>

            <div className="bg-dj-panel rounded-xl border border-gray-800 shadow-panel p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <span className="text-dj-purple">📚</span>
                <span>Documentation</span>
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start space-x-3">
                  <span className="text-dj-accent font-bold">1.</span>
                  <p>Write your Strudel pattern code in the editor</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-dj-accent font-bold">2.</span>
                  <p>Press <kbd className="px-2 py-1 bg-gray-900 text-gray-300 rounded border border-gray-700 font-mono text-xs">Ctrl/Cmd + Enter</kbd> or click Execute</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-dj-accent font-bold">3.</span>
                  <p>Listen to your creation and iterate in real-time</p>
                </div>
                <div className="mt-4 p-3 bg-dj-purple/10 border border-dj-purple/30 rounded-md">
                  <p className="text-xs text-dj-purple font-semibold mb-1">💡 Strudel Tips:</p>
                  <ul className="text-xs space-y-1 list-disc list-inside">
                    <li>Use mini-notation: <code className="font-mono">"c3 e3 g3"</code></li>
                    <li>Built-in synths: <code className="font-mono">sawtooth</code>, <code className="font-mono">square</code>, <code className="font-mono">triangle</code>, <code className="font-mono">sine</code></li>
                    <li>Transform: <code className="font-mono">.fast(2)</code>, <code className="font-mono">.slow(0.5)</code></li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <p className="text-xs text-gray-500 mb-2">Learn More:</p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://strudel.cc/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 rounded-md text-xs border border-gray-700 transition-colors">
                      Strudel Website
                    </a>
                    <a href="https://strudel.cc/learn/getting-started/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-900 hover:bg-gray-800 text-gray-300 rounded-md text-xs border border-gray-700 transition-colors">
                      Getting Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-sm text-gray-500">
              Professional Live Coding Environment for DJs & Music Producers
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ExampleCard({ title, description, code, onUse }) {
  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 hover:border-dj-accent/30 transition-colors group">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1 pr-2">
          <h4 className="text-sm font-semibold text-gray-300 group-hover:text-dj-accent transition-colors">{title}</h4>
          {description && (
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          )}
        </div>
        <button
          onClick={onUse}
          className="px-2 py-1 bg-dj-accent/10 hover:bg-dj-accent/20 text-dj-accent text-xs rounded-md border border-dj-accent/30 transition-colors flex-shrink-0"
        >
          Use
        </button>
      </div>
      <pre className="text-xs text-gray-500 font-mono overflow-x-auto">
        <code>{code.substring(0, 60)}...</code>
      </pre>
    </div>
  )
}

export default App
