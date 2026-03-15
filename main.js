const keySounds = {
  c:  'pianosound/C4.mp3',
  cs: 'pianosound/Db4.mp3',
  d:  'pianosound/D4.mp3',
  ds: 'pianosound/Eb4.mp3',
  e:  'pianosound/E4.mp3',
  f:  'pianosound/F4.mp3',
  fs: 'pianosound/Gb4.mp3',
  g:  'pianosound/G4.mp3',
  gs: 'pianosound/Ab4.mp3',
  a:  'pianosound/A4.mp3',
  as: 'pianosound/Bb4.mp3',
  b:  'pianosound/B4.mp3',
  c2: 'pianosound/C5.mp3',
};

const keyboardMap = {
  'a': 'c',
  'w': 'cs',
  's': 'd',
  'e': 'ds',
  'd': 'e',
  'f': 'f',
  't': 'fs',
  'g': 'g',
  'y': 'gs',
  'h': 'a',
  'u': 'as',
  'j': 'b',
  'k': 'c2',
};

function playSound(src) {
  const audio = new Audio(src);
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 700); 
}

Object.entries(keySounds).forEach(([id, src]) => {
  document.getElementById(id).addEventListener('mousedown', () => playSound(src));
});

document.addEventListener('keydown', (e) => {
  const id = keyboardMap[e.key];
  if (id && keySounds[id]) {
    playSound(keySounds[id]);
    const key = document.getElementById(id);
    if (key) key.classList.add('pressed');
  }
});

document.addEventListener('keyup', (e) => {
  const id = keyboardMap[e.key];
  if (id) {
    const key = document.getElementById(id);
    if (key) key.classList.remove('pressed');
  }
});
