import { useEffect, useRef } from 'react'
import './LiveCodeEditor.css'

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
    <div className="live-code-editor">
      <div className="editor-header">
        <span className="editor-label">Code Editor</span>
        <span className="editor-hint">Ctrl/Cmd + Enter to evaluate</span>
      </div>
      <textarea
        ref={textareaRef}
        className="code-textarea"
        value={code}
        onChange={handleChange}
        placeholder="Enter your Tone.js code here..."
        spellCheck="false"
      />
    </div>
  )
}

export default LiveCodeEditor
