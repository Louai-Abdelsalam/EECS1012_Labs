function init() {
  //document.getElementById("count").innerHTML = 0;
  if(window.DeviceOrientationEvent) {
    document.getElementById("text").innerHTML = "Supports orientation events";
    window.addEventListener("deviceorientation", orientationCallback, true);
  } else {
    document.getElementById("text").innerHMTL = "No orientation event support";
  }
}

function orientationCallback(eventData) {
/*
  document.getElementById("count").innerHTML = Number( document.getElementById("count").innerHTML) + 1;
  document.getElementById("tilt").innerHTML = eventData.gamma;
  document.getElementById("pitch").innerHTML = eventData.beta;
//*/
//*
  document.getElementById("text").innerHTML = eventData.gamma + " " +
   eventData.beta;

   var tilt = eventData.gamma;
   var pitch = eventData.beta;

   if (tilt < -90)
   {
      tilt = -90;
   }
   else if (tilt > 90)
   {
      tilt = 90;
   }

   if (pitch < -90)
   {
      pitch = -90
   }
   else if (pitch > 90)
   {
      pitch = 90;
   }

   var d = document.getElementById("center");
   var x0 = (window.innerWidth - d.offsetWidth) / 2;
   var y0 = (window.innerHeight - d.offsetHeight) / 2;
   d.style.top = y0;
   d.style.left = x0;

   var c = document.getElementById("ball");
   var x = (window.innerWidth - d.offsetWidth) / 2;
   var y = (window.innerHeight - d.offsetHeight) / 2;
   var dx = x * tilt / 90;
   var dy = y * pitch / 90;
   c.style.top = y + dy;
   c.style.left = x + dx;
   //*/
}

alert("javascript loaded");
window.onload = init;
