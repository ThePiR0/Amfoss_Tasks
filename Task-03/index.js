
const soundMap = {
    w: "sounds/snare.mp3",
    a: "sounds/kick-bass.mp3",
    s: "sounds/crash.mp3",
    d: "sounds/tom-1.mp3",  
    j: "sounds/tom-2.mp3",
    k: "sounds/tom-3.mp3",
    l: "sounds/tom-4.mp3",
  };
  

  document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", () => {
      const soundKey = button.textContent; 
      playSound(soundKey);
    });
  });


 document.addEventListener("keydown", (event) => {
    const soundKey = event.key; 
    if (soundMap[soundKey]) {
        playSound(soundKey);
    }
});
  
  function playSound(key) {
    const audio = new Audio(soundMap[key]);
    audio.play();
  }
  
