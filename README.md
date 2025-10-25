# Live Coding Music SPA

A Single Page Application (SPA) that provides a place for live coding music in the browser.

## 🎵 Features

- **Live Code Editor**: Write and evaluate musical patterns in real-time
- **Tone.js Integration**: Powerful audio synthesis and effects using [Tone.js](https://tonejs.github.io/)
- **Web Audio API**: High-quality audio synthesis and effects
- **Instant Feedback**: Evaluate code with keyboard shortcuts (Ctrl/Cmd + Enter)
- **Interactive Controls**: Play and stop patterns with easy-to-use buttons

## 🛠️ Technology Stack

- **Framework**: React (for component-based UI)
- **Audio Engine**: Web Audio API and Tone.js
- **Build Tool**: Vite (for fast development and optimized production builds)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bbodensieck/live-coding-spike-.git
cd live-coding-spike-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Usage

1. **Write Code**: Enter Tone.js code in the code editor
2. **Evaluate**: Press `Ctrl/Cmd + Enter` or click the "Play" button
3. **Listen**: Hear your audio play in real-time
4. **Stop**: Click the "Stop" button to halt playback

### Example Patterns

Try these examples to get started:

```javascript
// Simple note
const synth = new Tone.Synth().toDestination();
synth.triggerAttackRelease("C4", "8n");

// FM synthesis
const synth = new Tone.FMSynth().toDestination();
synth.triggerAttackRelease("G3", "2n");

// Sequence
const part = new Tone.Part((time, note) => {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(note, "8n", time);
}, [["0:0", "C4"], ["0:1", "E4"], ["0:2", "G4"]]);
part.start();
Tone.Transport.start();
```

## 🎹 Learn More

- [Tone.js Documentation](https://tonejs.github.io/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## 📄 License

This project is open source and available under the MIT License.

