/**
 * Strudel Pattern Integration
 * Provides Strudel-like musical pattern logic for the Live Coding Studio
 */

import { repl, evalScope } from '@strudel/core';
import { getAudioContext, initAudioOnFirstClick, webaudioOutput, registerSynthSounds, samples } from '@strudel/webaudio';
import { transpiler } from '@strudel/transpiler';
import * as strudel from '@strudel/core';
import * as tonal from '@strudel/tonal';
import * as mini from '@strudel/mini';

let strudelRepl = null;
let isInitialized = false;

/**
 * Initialize Strudel REPL system
 */
export async function initStrudel() {
  if (isInitialized) {
    return strudelRepl;
  }

  try {
    // Initialize audio on first interaction
    await initAudioOnFirstClick();

    // Register built-in synthesizer sounds
    registerSynthSounds();

    // Load sample library from the standard dirt-samples repository
    // This includes piano, drums, and many other samples
    await samples('github:tidalcycles/dirt-samples');

    // Import Strudel modules into global scope so pattern functions are available
    await evalScope(
      Promise.resolve(strudel),
      Promise.resolve(tonal),
      Promise.resolve(mini),
    );

    // Create Strudel REPL instance
    strudelRepl = repl({
      defaultOutput: webaudioOutput,
      getTime: () => getAudioContext().currentTime,
      transpiler: transpiler,
    });

    isInitialized = true;
    console.log('✓ Strudel pattern system initialized');
    console.log('✓ Sample library loaded (including piano, drums, and more)');
    return strudelRepl;
  } catch (error) {
    console.error('Failed to initialize Strudel:', error);
    throw error;
  }
}

/**
 * Evaluate Strudel pattern code
 * @param {string} code - Strudel pattern code
 */
export async function evaluateStrudelPattern(code) {
  if (!isInitialized) {
    await initStrudel();
  }

  try {
    // Evaluate the code using Strudel's REPL (transpiler is configured in REPL)
    const result = await strudelRepl.evaluate(code);
    return result;
  } catch (error) {
    console.error('Strudel pattern evaluation error:', error);
    throw error;
  }
}

/**
 * Start Strudel playback
 */
export async function startStrudel() {
  if (!isInitialized) {
    await initStrudel();
  }
  strudelRepl.start();
}

/**
 * Stop Strudel playback
 */
export function stopStrudel() {
  if (strudelRepl) {
    strudelRepl.stop();
  }
}

/**
 * Pause Strudel playback
 */
export function pauseStrudel() {
  if (strudelRepl) {
    strudelRepl.pause();
  }
}

/**
 * Toggle Strudel playback
 */
export function toggleStrudel() {
  if (strudelRepl) {
    strudelRepl.toggle();
  }
}

/**
 * Clear all running patterns (hush)
 */
export function hushStrudel() {
  if (strudelRepl && strudelRepl.hush) {
    strudelRepl.hush();
  }
}

/**
 * Set tempo in cycles per second
 * @param {number} cps - Cycles per second
 */
export function setCps(cps) {
  if (strudelRepl && strudelRepl.setCps) {
    strudelRepl.setCps(cps);
  }
}

/**
 * Set tempo in cycles per minute (useful for BPM conversion)
 * @param {number} cpm - Cycles per minute
 */
export function setCpm(cpm) {
  if (strudelRepl && strudelRepl.setCpm) {
    strudelRepl.setCpm(cpm);
  }
}

/**
 * Get the Strudel REPL instance for advanced usage
 */
export function getStrudelRepl() {
  return strudelRepl;
}

/**
 * Check if Strudel is playing
 */
export function isStrudelPlaying() {
  return strudelRepl?.scheduler?.started || false;
}

export default {
  initStrudel,
  evaluateStrudelPattern,
  startStrudel,
  stopStrudel,
  pauseStrudel,
  toggleStrudel,
  hushStrudel,
  setCps,
  setCpm,
  getStrudelRepl,
  isStrudelPlaying,
};
