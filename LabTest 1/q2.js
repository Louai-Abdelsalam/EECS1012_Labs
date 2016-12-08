/*
IMPORTANT!!
I was not exactly sure what was being
asked of me in Question#3, 4th step. And
when I asked the TA for help he said to
answer based on my assumption of the
question. So here is my assumption:

The "output" div should be replaced with 20
lines of output. The first line should have
60 asterisks (*), the next --18-- lines
should have one asterisk, followed by 58
periods ('), followed by one asterisk. The
20'th line should have 60 asterisks.

I put dashes before and after the editted part
of the step description based on my understanding
of it.
*/

function go()
{
    var lineCount = 0;
    var totalLines = 20;
    var inlineCharCount = 0;
    var maxInlineChars = 60;
    var target = document.getElementById("output");
    target.innerHTML = "";

    while (lineCount < totalLines)
    {
      while (inlineCharCount < maxInlineChars)
      {
          if (lineCount == 0 || lineCount == 19)
          {
              target.innerHTML += "*";
          }
          else
          {
              if (inlineCharCount == 0 ||
                inlineCharCount == 59)
              {
                  target.innerHTML += "*";
              }
              else
              {
                  target.innerHTML += "'";
              }
        }

        inlineCharCount++;
      }

      if (lineCount < (totalLines - 1))
      {
        target.innerHTML += "<br />";
      }

      inlineCharCount = 0;
      lineCount++;
    }
}
