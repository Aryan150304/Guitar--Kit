// var nam = prompt("Hey! Welcome to the guitar kit made by Aryan. Tell me your name");

for (var i = 0; i < (document.querySelectorAll(".btn").length); i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function(event) {
      var soundStore = this.textContent;
      mySound(soundStore);
      myAnimation(soundStore);

    });
  }


  document.addEventListener("keydown", function(event) {
      var keyStore= event.key;
      mySound(keyStore);
      myAnimation(event.key);

    });


function mySound(name) {
  switch (name) {
    case '1':
      var audio = new Audio('1st_String_E_vbr.mp3');
      audio.play();
      break;


    case '2':
      var audio = new Audio('3rd_String_G_vbr.mp3');
      audio.play();
      break;

    case '3':
      var audio = new Audio('4th_String_D_vbr.mp3');
      audio.play();
      break;

    case '4':
      var audio = new Audio('5th_String_A_vbr.mp3');
      audio.play();
      break;


    case '5':
      var audio = new Audio('6th_String_E_vbr.mp3');
      audio.play();
      break;

    case '6':
      var audio = new Audio('C_vbr.mp3');
      audio.play();
      break;

    case '7':
      var audio = new Audio('D_vbr.mp3');
      audio.play();
      break;

    case '8':
      var audio = new Audio('Dm_vbr.mp3');
      audio.play();
      break;

    case '9':
      var audio = new Audio('E_vbr.mp3');
      audio.play();
      break;

    default :
    alert(nam+", you have pressed a wrong button");

  };

}

function myAnimation(any){
  document.querySelector(".bt-"+any).classList.add("pressed");

  setTimeout( function(){
      document.querySelector(".bt-"+any).classList.remove("pressed");
  },100);

};
