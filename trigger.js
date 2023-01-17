function partyMode(){
    var party = document.querySelector(".default");
        party.classList.toggle("party");

    var tekst = document.querySelector(".tekstDefault");
        tekst.classList.toggle("tekst");

}
function alert(){
    alert("do not use if you're prone to seizures");
}

  var button = document.getElementById("play");
  
  button.addEventListener("click", function() {
    if (!music.paused) {
      music.currentTime = 0;
      music.pause();
    } else {
      music.play();
    }
  });
  
  var music = new Audio();
  music.src = "musik.mp3";
  music.loop = true;

  music.load();


