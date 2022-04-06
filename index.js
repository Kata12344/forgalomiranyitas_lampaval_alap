window.addEventListener("load", init);

function Class(elem) {
    return document.getElementsByClassName(elem);
}

function init() {
    setInterval(kapcsolgatas, 6000);
    
}
var id = null;
function mozgas() {   
  var pozicio = 350;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pozicio == 7000) {
      clearInterval(id);
    } else {
        pozicio++; 
      Class("auto")[0].style.left = pozicio + 'px'; 
      Class("auto")[0].style.right = pozicio + 'px'; 
    }
  }
}
function kapcsolgatas() {
        setTimeout(fekete,1000)
        setTimeout(piros,2000)
        setTimeout(pirosSarga, 4000)
        setTimeout(zold, 6000)
        setTimeout(mozgas, 6000)
}

function fekete() {
    Class("piros")[0].style.backgroundColor="black";
    Class("sarga")[0].style.backgroundColor="black";
    Class("zold")[0].style.backgroundColor="black";
}

function piros() {
    Class("piros")[0].style.backgroundColor="red";
    Class("sarga")[0].style.backgroundColor="black";
    Class("zold")[0].style.backgroundColor="black";
}

function pirosSarga() {
    Class("piros")[0].style.backgroundColor="red";
    Class("sarga")[0].style.backgroundColor="yellow";
    Class("zold")[0].style.backgroundColor="black";
}

function zold() {
    Class("piros")[0].style.backgroundColor="black";
    Class("sarga")[0].style.backgroundColor="black";
    Class("zold")[0].style.backgroundColor="green";
}