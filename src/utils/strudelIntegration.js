/**
 * Strudel Pattern Integration
 * Provides Strudel-like musical pattern logic for the Live Coding Studio
 */

import { repl, controls } from '@strudel/core';
import { getAudioContext, initAudioOnFirstClick, webaudioOutput } from '@strudel/webaudio';
import { evalScope } from '@strudel/core';
import { transpiler } from '@strudel/transpiler';
import { evaluate as strudelEvaluate } from '@strudel/transpiler';
import '@strudel/tonal';
import '@strudel/mini';

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

    // Create Strudel REPL instance
    strudelRepl = repl({
      defaultOutput: webaudioOutput,
      getTime: () => getAudioContext().currentTime,
    });

    isInitialized = true;
    console.log('✓ Strudel pattern system initialized');
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
    // Evaluate the code using Strudel's transpiler and evaluator
    const result = await strudelRepl.evaluate(code, transpiler);
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
