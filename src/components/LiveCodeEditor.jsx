import { useEffect, useRef } from 'react'

function LiveCodeEditor({ code, onChange, onEvaluate }) {
  const textareaRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + Enter to evaluate
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault()
        onEvaluate()
      }
    }

    const textarea = textareaRef.current
    if (textarea) {
      textarea.addEventListener('keydown', handleKeyDown)
      return () => textarea.removeEventListener('keydown', handleKeyDown)
    }
  }, [onEvaluate])

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className="p-0">
      <textarea
        ref={textareaRef}
        className="w-full min-h-[400px] p-6 font-mono text-sm leading-relaxed bg-[#0d1117] text-gray-300 border-0 resize-y outline-none focus:ring-2 focus:ring-dj-accent/30 placeholder-gray-600"
        value={code}
        onChange={handleChange}
        placeholder="// Enter your Strudel pattern code here...\n// Press Ctrl/Cmd + Enter to execute\n\nnote('c3 e3 g3 b3').sound('sawtooth')"
        spellCheck="false"
        style={{
          tabSize: 2,
          fontFamily: "'JetBrains Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
        }}
      />
    </div>
  )
}

export default LiveCodeEditor
