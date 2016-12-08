//var target = document.getElementById("output");
var count = 0;

function go()
{
  var target = document.getElementById("output");
  if (count == 0)
  {
    target.style.color = 'red';
    count++;
  }
  else if (count == 1)
  {
    target.style.fontFamily = 'sans-serif';
    count++;
  }
  else if (count == 2)
  {
    var text = target.textContent;
    var loopCount = 0;

    while (loopCount <= 3)
    {
        target.innerHTML = target.textContent + text;
        loopCount++;
    }

    count++;
  }
  else
  {
    target.innerHTML = "QUESTION DONE";
  }
}
