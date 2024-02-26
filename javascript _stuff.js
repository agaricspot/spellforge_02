var spells = [" Alarm (VSM)", " Burning Hands (VS)", " Cloud of Daggers (VSM)", " Crown of Madness(VS)"];
var mats = ["tiny bell & fine piece of silver wire", "-----", "a sliver of glass", "-----"];
var spots = ["21", "22", "23", "24"];

function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function dropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show")
}


window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
  else if (!e.target.matches('.dropbtn2')) {
    var myDropdown2 = document.getElementById("myDropdown2");
    if (myDropdown2.classList.contains('show')) {
      myDropdown2.classList.remove('show');
    }
  }
}



function dragstartHandler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("application/my-app", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dragoverHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}

function dropHandler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("application/my-app");
  const hold = document.getElementById(data).firstChild.nodeValue;
  document.getElementById(data).firstChild.nodeValue = ev.target.firstChild.nodeValue;
  ev.target.firstChild.nodeValue = hold;

  for (x of document.getElementsByClassName("drop")) {
    if (spells.includes(" " + x.innerText)) {
      document.getElementById("mat" + x.id).innerText = mats[spells.indexOf(" " + x.innerText)];
    }
    else {
      document.getElementById("mat" + x.id).innerText = "-----"
    }
  }
  for(x of document.getElementsByClassName("spell"))
  if (!(spells.includes(" " + x.innerText))) {
    x.draggable = false;
  }
  else {
    x.draggable = true;
  }

}