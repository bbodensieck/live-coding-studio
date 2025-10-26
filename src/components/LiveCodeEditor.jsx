import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'
import { keymap } from '@codemirror/view'

function LiveCodeEditor({ code, onChange, onEvaluate }) {
  // Custom keymap for Ctrl/Cmd + Enter
  const evaluateKeymap = keymap.of([
    {
      key: 'Mod-Enter',
      run: () => {
        onEvaluate()
        return true
      },
    },
  ])

  return (
    <div className="p-0">
      <CodeMirror
        value={code}
        height="400px"
        theme={oneDark}
        extensions={[javascript(), evaluateKeymap]}
        onChange={(value) => onChange(value)}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          searchKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
        style={{
          fontSize: '14px',
          fontFamily: "'JetBrains Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
        }}
      />
    </div>
  )
}

export default LiveCodeEditor
