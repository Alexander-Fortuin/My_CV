// skill bar animation
function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 86) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
  var elem2 = document.getElementById("myBar2");
  var id2 = setInterval(frame2, 10);
  var width2 = 1;
  function frame2() {
    if (width2 >= 97) {
      clearInterval(id2);
    } else {
      width2++;
      elem2.style.width = width2 + '%';
    }
  }
  var elem3 = document.getElementById("myBar3");
  var id3 = setInterval(frame3, 10);
  var width3 = 1;
  function frame3() {
    if (width3 >= 94) {
      clearInterval(id3);
    } else {
      width3++;
      elem3.style.width = width3 + '%';
    }
  }
  var elem4 = document.getElementById("myBar4");
  var id4 = setInterval(frame4, 10);
  var width4 = 1;
  function frame4() {
    if (width4 >= 92) {
      clearInterval(id4);
    } else {
      width4++;
      elem4.style.width = width4 + '%';
    }
  }
  var elem5 = document.getElementById("myBar5");
  var id5 = setInterval(frame5, 10);
  var width5 = 1;
  function frame5() {
    if (width5 >= 89) {
      clearInterval(id5);
    } else {
      width5++;
      elem5.style.width = width5 + '%';
    }
  }
  var elem6 = document.getElementById("myBar6");
  var id6 = setInterval(frame6, 10);
  var width6 = 1;
  function frame6() {
    if (width6 >= 98) {
      clearInterval(id6);
    } else {
      width6++;
      elem6.style.width = width6 + '%';
    }
  }
  // toggle hide
  // var hidden = document.getElementById('hide');
  // // hidden.style.transition = "all 2s";
  // if (hidden.style.height === "0px" ) {
  //   hidden.style.height = "auto";
  // } else {
  //   hidden.style.height = "0px";
  // }



  var hint = document.getElementById('hide');
  var ctr = 1;
  hint.className = hint.className !== 'show' ? 'show' : 'hide';
  if (hint.className === 'show') {
    hint.style.display = 'block';
    window.setTimeout(function(){
      hint.style.opacity = 1;
      hint.style.transform = 'scale(1)';
    },0);
  }
  if (hint.className === 'hide') {
    hint.style.opacity = 0;
    hint.style.transform = 'scale(0)';
    window.setTimeout(function(){
      hint.style.display = 'none';
    },700); // timed to match animation-duration
  }


}
///////////////////////////////////////////////////

var hint = document.getElementById('hide');
// var btn = document.getElementById('btn_show');

function what(){
  var ctr = 1;
  hint.className = hint.className !== 'show' ? 'show' : 'hide';
  if (hint.className === 'show') {
    hint.style.display = 'block';
    window.setTimeout(function(){
      hint.style.opacity = 1;
      hint.style.transform = 'scale(1)';
    },0);
  }
  if (hint.className === 'hide') {
    hint.style.opacity = 0;
    hint.style.transform = 'scale(0)';
    window.setTimeout(function(){
      hint.style.display = 'none';
    },700); // timed to match animation-duration
  }

};
///////////////////////////////////////////////

////////////////////////////////////////////////
// toggle hide

// function hide() {
//   var hidden = document.getElementById('hide');
//
//   if (hidden.style.height === "0px" ) {
//     hidden.style.height = "auto";
//   } else {
//     hidden.style.height = "0px";
//   }
// }
