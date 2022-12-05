function partyMode(){
    var party = document.querySelector(".default");
        party.classList.toggle("party");

    var tekst = document.querySelector(".tekstDefault");
        tekst.classList.toggle("tekst");

}
function alert(){
    alert("do not use if you're prone to seizures");
}

  // Get the button element by its ID
  var button = document.getElementById("play");
  
  // Add an event listener to the button
  button.addEventListener("click", function() {
    // If the music is currently playing, pause it and set the current playback position to 0
    // Otherwise, play the music
    if (!music.paused) {
      music.currentTime = 0;
      music.pause();
    } else {
      music.play();
    }
  });
  
  // Create an audio element to hold the music
  var music = new Audio();
  
  // Set the source of the audio element to the URL of the music file
  music.src = "musik.mp3";
  
  // Enable looping on the audio element
  music.loop = true;
  
  // Load the music file
  music.load();


