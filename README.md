# Live Coding Music SPA

A Single Page Application (SPA) that provides a place for live coding music in the browser.

🌐 **Live Demo**: [https://bbodensieck.github.io/live-coding-studio/](https://bbodensieck.github.io/live-coding-studio/)

## 🎵 Features

- **Live Code Editor**: Write and evaluate musical patterns in real-time
- **Strudel Pattern Logic**: Use Strudel's powerful mini-notation for musical patterns
- **Web Audio API**: High-quality audio synthesis and effects
- **Instant Feedback**: Evaluate code with keyboard shortcuts (Ctrl/Cmd + Enter)
- **Interactive Controls**: Play and stop patterns with easy-to-use buttons

## 🛠️ Technology Stack

- **Framework**: React (for component-based UI)
- **Audio Engine**: [Strudel](https://strudel.cc/) - Pattern-based live coding system
- **Build Tool**: Vite (for fast development and optimized production builds)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bbodensieck/live-coding-studio.git
cd live-coding-studio
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

## 🚀 Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow:

1. Builds the project using Vite
2. Uploads the build artifacts to GitHub Pages
3. Deploys to [https://bbodensieck.github.io/live-coding-studio/](https://bbodensieck.github.io/live-coding-studio/)

The deployment is configured in `.github/workflows/deploy.yml` and uses GitHub Actions.

## 📝 Usage

### Getting Started

1. **Write Code**: Enter your Strudel pattern code in the editor
2. **Evaluate**: Press `Ctrl/Cmd + Enter` or click the "Execute" button
3. **Listen**: Hear your audio play in real-time
4. **Stop**: Click the "Stop" button to halt playback

### Strudel Patterns

Use Strudel's powerful pattern notation for expressive musical patterns:

```javascript
// Simple note pattern
note("c3 e3 g3 b3").s("piano")

// Drum pattern with rhythm
s("bd sd, hh*4").bank("RolandTR808")

// Pattern with transformations
note("c3 [e3 g3] b3").s("sawtooth").lpf(1000).fast(2)

// Complex polyrhythmic pattern
stack(
  note("c3 e3 g3").s("piano"),
  s("bd*2 sd").bank("RolandTR808")
)
```

#### Strudel Pattern Features

- **Mini-notation**: Concise pattern syntax like `"c3 e3 g3"`
- **Rhythmic variations**: Use `*` for subdivision, `/` for elongation
- **Pattern transformations**: `.fast()`, `.slow()`, `.rev()`, `.every()`
- **Effects**: `.lpf()`, `.hpf()`, `.delay()`, `.reverb()` and more
- **Stacking**: Combine multiple patterns with `stack()`

## 🎹 Learn More

- [Strudel Website](https://strudel.cc/)
- [Strudel Tutorial](https://strudel.cc/learn/getting-started/)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

## 📄 License

This project is open source and available under the MIT License.

