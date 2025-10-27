/**
 * Example Strudel patterns for the Live Coding Studio
 */

export const examples = [
  {
    id: 'simple-pattern',
    title: 'Simple Pattern',
    description: 'A basic melodic pattern using sawtooth synth',
    code: 'note("c3 e3 g3 b3").sound("sawtooth")',
    category: 'basics',
  },
  {
    id: 'fast-pattern',
    title: 'Fast Pattern',
    description: 'Speed up a pattern with the fast() function',
    code: 'note("c a f e").fast(2).sound("square")',
    category: 'basics',
  },
  {
    id: 'pattern-with-effects',
    title: 'Pattern with Effects',
    description: 'Add filters and speed to create interesting sounds',
    code: 'note("c3 [e3 g3] b3").sound("triangle").lpf(1000).fast(2)',
    category: 'basics',
  },
  {
    id: 'lounge-foundation',
    title: 'Lounge Foundation',
    description: 'Smooth lounge beat with jazzy bass and mellow drums',
    code: `// Lounge Foundation
// Smooth, laid-back groove with jazzy elements
setCps(95/60/4);

stack(
  // Soft kick pattern
  sound("bd ~ bd ~").gain(0.6).lpf(800),
  
  // Jazzy hi-hats with swing
  sound("hh*4").gain(0.25).hpf(8000).delay(0.15),
  
  // Snare on 2 and 4
  sound("~ sd ~ sd").gain(0.45).room(0.4),
  
  // Smooth bass line - Dm7 groove
  n("0 ~ 3 ~ 5 ~ 7 ~").scale("D2:minor").sound("gm_acoustic_bass").lpf(600).room(0.3).gain(0.7),
  
  // Rhodes piano chords - jazz voicings
  note("<Dm7 G7 Cmaj7 Am7>").slow(4).voicing().sound("gm_epiano1").room(0.5).delay(0.2).gain(0.5)
)`,
    category: 'lounge',
  },
  {
    id: 'midnight-jazz',
    title: 'Midnight Jazz Lounge',
    description: 'Deep house meets jazz - sophisticated and atmospheric',
    code: `// Midnight Jazz Lounge
// Deep, atmospheric lounge with jazz harmony
setCps(92/60/4);

stack(
  // Deep kick with subtle swing
  sound("bd ~ ~ bd ~ ~ bd ~").gain(0.65).lpf(700).room(0.2),
  
  // Brushed hi-hats
  sound("hh*8").gain(0.2).hpf(9000).room(0.6),
  
  // Rim shots for texture
  sound("~ ~ rim ~").gain(0.3).room(0.5),
  
  // Walking bass - jazz style
  n("<0 2 3 5> <7 5 3 2>").scale("F2:minor").sound("gm_fretless_bass").lpf(500).room(0.3).gain(0.6),
  
  // Lush pad chords
  note("<Fm7 Bbm7 Ebmaj7 Ab7>").slow(8).voicing().sound("gm_pad_warm").room(0.8).delay(0.3).lpf(1200).gain(0.4),
  
  // Subtle melody
  n("~ 0 ~ 2 ~ 4 ~ 6").scale("F4:minor:pentatonic").sound("gm_vibraphone").room(0.7).delay(0.25).gain(0.3)
)`,
    category: 'lounge',
  },
  {
    id: 'velvet-sunset',
    title: 'Velvet Sunset',
    description: 'Warm, dreamy lounge with filtered textures',
    code: `// Velvet Sunset
// Warm, filtered lounge with sweeping textures
setCps(88/60/4);

stack(
  // Soft, filtered kick
  sound("bd ~ bd ~ ~ bd ~ ~").gain(0.6).lpf(sine.range(400, 800).slow(8)).room(0.2),
  
  // Shaker pattern
  sound("shaker_small*16").gain(0.15).hpf(10000).room(0.5),
  
  // Open hi-hat accents
  sound("~ ~ oh ~").gain(0.3).room(0.6),
  
  // Warm bass with movement
  n("0 ~ 2 ~ 3 ~ 5 ~").scale("G2:major").sound("gm_synth_bass_1").lpf(sine.range(300, 600).slow(6)).room(0.4).gain(0.65),
  
  // Dreamy electric piano
  note("<Gmaj7 Em7 Cmaj7 D7>").slow(4).voicing().sound("gm_epiano2").room(0.7).delay(0.3).lpf(sine.range(800, 1500).slow(10)).gain(0.45),
  
  // Atmospheric pad
  note("<G3 E3 C3 D3>").slow(8).sound("gm_pad_new_age").room(0.9).lpf(1000).gain(0.35)
)`,
    category: 'lounge',
  },
  {
    id: 'cocktail-hour',
    title: 'Cocktail Hour',
    description: 'Sophisticated bossa nova inspired lounge groove',
    code: `// Cocktail Hour
// Bossa nova inspired sophisticated lounge
setCps(110/60/4);

stack(
  // Bossa kick pattern
  sound("bd ~ ~ bd ~ ~ ~ bd ~ ~ bd ~ ~ ~ ~ ~").gain(0.6).lpf(750),
  
  // Rim shot pattern
  sound("~ rim ~ ~ ~ rim ~ ~ ~ rim ~ ~ ~ rim ~ ~").gain(0.35).room(0.4),
  
  // Subtle brush pattern
  sound("hh*16").gain(0.18).hpf(9000).room(0.5),
  
  // Syncopated bass - bossa style
  n("0 ~ ~ 3 ~ 5 ~ ~ 7 ~ ~ 5 ~ 3 ~ ~").scale("A2:major").sound("gm_acoustic_bass").lpf(550).room(0.3).gain(0.65),
  
  // Jazz guitar chords
  note("<Amaj7 F#m7 Dmaj7 E7>").slow(4).voicing().sound("gm_acoustic_guitar_nylon").room(0.6).delay(0.15).gain(0.5),
  
  // Flute melody
  n("~ 0 2 ~ 4 ~ 6 7").scale("A4:major:pentatonic").sound("gm_flute").room(0.6).delay(0.2).gain(0.4)
)`,
    category: 'lounge',
  },
  {
    id: 'smooth-operator',
    title: 'Smooth Operator',
    description: 'Laid-back groovy lounge with sax vibes',
    code: `// Smooth Operator
// Groovy laid-back lounge with sax atmosphere
setCps(98/60/4);

stack(
  // Steady four-on-floor with subtle variation
  sound("bd*4").gain(0.6).lpf(700).room(0.2),
  
  // Sophisticated hi-hat pattern
  sound("hh ~ hh hh ~ hh ~ hh").gain(0.25).hpf(8500).room(0.5),
  
  // Clap on 2 and 4
  sound("~ cp ~ cp").gain(0.4).room(0.5),
  
  // Funky bass line
  n("0 ~ 0 3 ~ 5 ~ 3").scale("E2:minor").sound("gm_slap_bass_1").lpf(650).room(0.3).gain(0.7),
  
  // Smooth organ chords
  note("<Em7 A7 Dmaj7 G7>").slow(4).voicing().sound("gm_drawbar_organ").room(0.6).lpf(1200).gain(0.45),
  
  // Sax melody suggestion
  n("~ ~ 0 ~ 2 ~ ~ 4").scale("E4:minor:pentatonic").sound("gm_tenor_sax").room(0.7).delay(0.2).gain(0.5)
)`,
    category: 'lounge',
  },
  {
    id: 'ambient-lounge',
    title: 'Ambient Lounge',
    description: 'Minimal atmospheric lounge with evolving textures',
    code: `// Ambient Lounge
// Minimal, atmospheric lounge with evolving soundscape
setCps(85/60/4);

stack(
  // Minimal kick
  sound("bd ~ ~ ~ bd ~ ~ ~").gain(0.5).lpf(650).room(0.3),
  
  // Sparse percussion
  sound("~ ~ ~ rim").gain(0.25).room(0.8),
  
  // Evolving hi-hats
  sound("hh*8").gain(sine.range(0.1, 0.25).slow(8)).hpf(10000).room(0.7),
  
  // Deep sub bass
  n("0 ~ ~ ~ 3 ~ ~ ~").scale("C1:minor").sound("gm_synth_bass_2").lpf(400).room(0.4).gain(0.6),
  
  // Atmospheric pad with filter sweep
  note("<Cm7 Fm7 Abmaj7 Gm7>").slow(8).voicing().sound("gm_pad_atmosphere").room(0.9).lpf(sine.range(600, 1500).slow(12)).gain(0.4),
  
  // Distant bells
  n("~ ~ ~ 0 ~ ~ ~ 4").scale("C5:minor:pentatonic").sound("tubularbells").room(0.9).delay(0.4).gain(0.3)
)`,
    category: 'lounge',
  },
  {
    id: 'rhythm-of-the-night',
    title: 'The Rhythm Of The Night',
    description: 'Classic 90s eurodance track by Corona (by eeefano)',
    code: `// "The Rhythm Of The Night"
// song @by Corona
// script @by eeefano
setDefaultVoicings('legacy')
const as = register('as', (mapping, pat) => { mapping = Array.isArray(mapping) ? mapping : [mapping];
  return pat.fmap((v) => { v = Array.isArray(v) ? v : [v, 0];
    return Object.fromEntries(mapping.map((prop, i) => [prop, v[i]])); }); });

const crdpart = "<~ 0@10 1@24 0@19>".pickRestart(
["Ab Cm Bb F@2".slow(5)
,"Bb@3 Ab@3 Cm@2".slow(8)
]);
stack 
("<0 1@4 0 1@4 ~@8 2 3@7 2 3@7 0 1@4 0 1@4 0 1@4 0 1@4>".pickRestart(
  ["~ [4@3 ~]!3 7:5 6 4 3"
  ,"2:-1 0:-2 ~@4 6:1 4:-1 6 4:2 ~@4 [4:2 3]@3 ~@6 4 7:5 6 [4@2 ~] [3:-1 2@3]@2 0 ~@2".slow(4)
  ,"~@6 [6 ~]!2"
  ,"6 5@0.5 [5 ~] [4 ~]!2 [3 ~] 3:2@1.5 ~@7 6@2 6:2 [5 ~ ]!2 4 3@2 4 2 0:-2 ~@7 [0 2]@3 3@2 4 6:4 4:-4 ~ 0 2 0 4 ~ 0 0:2@2 ~@7".slow(7)
]).as("n:penv").scale("c4:minor").patt("0.07").s("gm_lead_1_square").room(0.4).delay(0.3).dfb(0.35).dt(60/128).gain(0.85)

,crdpart.chord().anchor("F4").voicing().s("gm_synth_strings_1").color("blue").gain(0.4)

,"<~@11 1@23 ~ 0@19>".pickRestart(
  ["2 ~@2 2 ~@2 2 ~@3 2 ~@3 2 ~"
  ,"[2 ~@2 2 ~@2 2 ~]!2"
]).n().chord(crdpart).anchor(crdpart.rootNotes(2)).voicing().s("gm_synth_bass_1").lpf(1500).room(0.5).color("green").gain(0.9)

,"<~@11 1@8 ~@16 0@19>".pickRestart(
  ["<5 7 6 3!2> ~ 9 ~ 10 ~ ~ 12 ~ 11 ~ 10 ~ 11 9 ~"
  ,"<6!3 5!3 7!2> ~ 9 ~ 10 ~ ~ 12 ~ 11 ~ 10 ~ 11 9 ~"
]).scale("c3:minor").note().s("gm_lead_2_sawtooth").room(0.3).delay(0.3).dfb(0.5).dt(60/128*2).color("red").gain(0.6)

,"<[2,3] ~@10 0@6 [0,1]@2 [0,2] 0@5 [0,1]@2 [0,2] 0@6 [2,3] 0@8 [0,1]@2 [0,2] 0@8>".pickRestart(
 [stack(s("bd*4").gain(0.8),s("[~ oh]*4").gain(0.14),s("hh*16").gain(0.09),s("[~ cp]*2").gain(0.4))
 ,s("[~ sd!3]!4 [sd*4]!4").slow(2).gain(run(32).slow(2).mul(1/31).add(0.1).mul(0.4))
 ,s("cr").gain(0.2)
 ,s("bd").gain(0.8)
 ]).bank("RolandTR909").room(0.2).color("yellow").velocity(1)
 
).cpm(128/4)`,
    category: 'songs',
  },
  {
    id: 'in-the-air-tonight',
    title: 'In The Air Tonight',
    description: 'Iconic 80s track with legendary drum break and gated reverb',
    code: `// "In The Air Tonight" 
// Atmospheric intro with iconic drum break
// Featuring the legendary gated reverb sound
setCps(92/60/4);

stack(
  // Atmospheric synth pad - Dm-C-Bb progression
  note("<Dm C Bb C>").slow(8).voicing().sound("gm_pad_new_age")
    .room(0.9).lpf(800).gain(0.4),
  
  // Deep synth bass foundation
  n("<0 ~ ~ ~ 10 ~ ~ ~ 8 ~ ~ ~ 10 ~ ~ ~>").scale("D1:minor")
    .sound("gm_synth_bass_2").lpf(400).room(0.3).gain(0.65),
  
  // Minimal drum pattern (pre-break)
  sound("~ ~ ~ ~ ~ ~ bd ~").gain(0.5).lpf(600).room(0.5),
  
  // ICONIC DRUM BREAK (uncomment for the legendary fill)
  // sound("bd*4 sd*2 bd*2 [sd bd] bd*4 sd*4")
  //   .bank("RolandTR808").room(2.5).gain(0.85).late(0.02),
  
  // Gated reverb snare (the signature sound)
  sound("~ sd ~ ~").gain(0.7).room(2.5).lpf(3000)
    .delay(0.15).mask("<1 1 1 0>"),
  
  // Hi-hat pattern with gated effect
  sound("hh*8").gain(0.2).hpf(8000)
    .room(1.5).mask("<1 0 1 1>").delay(0.1),
  
  // Ambient texture layer
  n("~ 0 ~ 2 ~ 4 ~ 6").scale("D4:minor:pentatonic")
    .sound("gm_vibraphone").room(0.9).delay(0.3).gain(0.25)
)`,
    category: 'songs',
  },
];

export default examples;
