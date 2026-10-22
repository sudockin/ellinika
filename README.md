# Ellinika · Greek A1–A2

A free, mobile-first web app for learning everyday Greek and preparing for the A1 and A2 levels of the Greek Language Certificate (Πιστοποίηση Ελληνομάθειας, [greek-language.gr/certification](https://www.greek-language.gr/certification/)).

It is built on the structure of [Rumbo](https://github.com/sudockin/rumbo), a Mexican Spanish app: short lessons, spaced review, speaking practice, role plays and local-only progress. Ellinika adds Greek-specific parts and an exam section.

## What is inside

| Area | Content |
|---|---|
| Alphabet | 24 letters, 8 letter pairs and 6 pronunciation tips, each with audio and an example word |
| Learn | 13 A1 lessons and 11 A2 lessons, each with examples and a 4-question check |
| Review | 101 phrases with spaced repetition. A1 shows A1 phrases; A2 adds the A2 phrases |
| Speak | Listen and repeat with Greek (el-GR) speech recognition, record and replay, and typed answers in Greek or Latin letters |
| Conversations | 8 role plays (4 A1, 4 A2), also used as part C of the speaking exam |
| Exam | A1 and A2 practice papers in the official format: reading, listening (read aloud by the device voice), writing with self-check and model answers, and speaking parts A, B and C |
| Progress | Streak, points, lessons, review intervals and best exam-practice scores |

Every Greek line has a Latin transliteration, which you can turn off in Settings once you read Greek.

### Made for Sana

- Greets her by name and shows a Greek word of the day with its story, often linked to French or Arabic
- Six titles earned with points (Alpha, Olive branch, Cyclades, Acropolis, Aegean, Laurel wreath), 16 badges, combo streaks and a daily-goal ring
- Light gold and rose confetti for finished lessons, conversations, good paper scores and new titles. Motion is off when the device asks for reduced motion.
- An "At home" phrase set and a "Sunday lunch with the family" conversation
- Her name is in Settings. Progress saved before these changes is kept and counted toward badges

## The exam format used

The papers follow the official A1 and A2 structure published by the Centre for the Greek Language. Each of the four papers is worth 25 marks.

| | Reading | Listening | Writing | Speaking |
|---|---|---|---|---|
| A1 | 30 min | 25 min | 40 min, about 50 + 60 words | 10–12 min per pair |
| A2 | 30 min | 25 min | 45 min, about 80–100 + 80–100 words | 12 min per pair |

The practice papers were written for this app. They are not official papers, and practice scores are not official marks. For real samples with audio, see the [official sample papers](https://www.greek-language.gr/certification/node/12.html). In the real writing paper you must not write your real name.

## Run it

You need Node.js 20 or later.

```sh
npm start        # http://127.0.0.1:5173
npm test
npm run check
```

To use it on a phone, host the `dist/` folder over HTTPS (for example GitHub Pages or Netlify) and add it to the home screen.

## Audio

Listening uses a Greek voice installed on the device. Settings explains how to install one on iPhone, Mac, Android and Windows. The app supports bundled recordings in the same `audio/manifest.json` format as Rumbo, but none are included yet. `npm run audio:plan` lists the 270 short texts that would need clips.

## Project structure

```
dist/
  app.mjs          UI, routing and events
  core.mjs         state, validation, review scheduling, Greek-aware answer matching
  voice.mjs        Greek voice selection and the speech player
  content.mjs      combines the data files
  rewards.mjs      princess ranks and badges
  data/            alphabet, phrases, A1 and A2 lessons, role plays, exam papers, daily notes
  sw.js            offline cache
scripts/           local server, icon generator, speech corpus
tests/             core logic, voice selection and content checks (answer keys, transliterations, exam structure)
```

## Notes

- Progress stays in the browser. Use Export backup in Settings to move it between devices.
- Built on the structure of Rumbo by the same author.
