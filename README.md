# TollyMemes

A clean and interactive web-based soundboard featuring iconic Telugu meme sounds.  
Built with pure HTML, CSS, and JavaScript — no frameworks, just smooth UI and instant playback.

---

## Features

- Instant meme sound playback
- Smooth animated UI with responsive grid layout
- Search functionality to quickly find sounds
- Visual feedback when a sound is playing
- Minimal and fast — no external dependencies

---

## Preview

A simple interface with clickable sound buttons styled as animated domes.  
Each button plays a meme sound instantly with visual feedback.

---

## Tech Stack

- HTML5
- CSS3 (custom animations & styling)
- Vanilla JavaScript (DOM manipulation & audio handling)

---

## Project Structure

```
.
├── index.html
├── style.css
├── script.js
├── sounds/
│   └── *.mp3
```

## How It Works

- Sounds are defined as an array in `script.js`
- UI cards are dynamically generated using JavaScript
- Clicking a card:
  - Stops any currently playing audio
  - Plays the selected sound
  - Adds a visual "playing" state
- Search filters sounds in real-time

---

## Key Highlights

- Lightweight and fast
- Fully client-side — no backend required
- Clean UI with attention to micro-interactions
- Easy to extend (just add new sounds to the array)

---

## Credits

Created by "Aluvala Sai Shailu Sri"
