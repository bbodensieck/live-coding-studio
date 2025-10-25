# Live Coding Music SPA

A Single Page Application (SPA) that provides a place for live coding music in the browser.

## 🎵 Features

- **Live Code Editor**: Write and evaluate musical patterns in real-time
- **Strudel Integration**: Powerful pattern-based music composition using [Strudel](https://strudel.cc/)
- **Web Audio API**: High-quality audio synthesis and effects
- **Tone.js Support**: Advanced audio capabilities through the Tone.js library
- **Instant Feedback**: Evaluate code with keyboard shortcuts (Ctrl/Cmd + Enter)
- **Interactive Controls**: Play and stop patterns with easy-to-use buttons

## 🛠️ Technology Stack

- **Framework**: React (for component-based UI)
- **Audio Engine**: Web Audio API and Tone.js
- **Live Coding Engine**: Strudel (for musical pattern logic)
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

1. **Write Code**: Enter Strudel patterns in the code editor
2. **Evaluate**: Press `Ctrl/Cmd + Enter` or click the "Play" button
3. **Listen**: Hear your pattern play in real-time
4. **Stop**: Click the "Stop" button to halt playback

### Example Patterns

Try these examples to get started:

```javascript
// Simple melody
note("c a f e").s("piano")

// Synth with filter
note("c3 eb3 g3").s("sawtooth").lpf(800)

// Drum pattern
sound("bd sd bd sd").speed(1)

// Chord progression
note("<c e g b>").scale("C:minor").s("triangle")
```

## 🎹 Learn More

- [Strudel Documentation](https://strudel.cc/)
- [Tone.js Documentation](https://tonejs.github.io/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## 📄 License

This project is open source and available under the MIT License.

