<script language="javascript">
var timerID = 0;
var timerRunning = false;
var charNo = 0;
var charMax = 0;
var textLine = "Michael Rusakov - Personal Web Site"; //Текст на кнопке
var urlLine = "http://www.myrusakov.ru"; //Адрес перехода после нажатия
function startShow() {
  stopShow();
  showLine();
  timerRunning = true;
}
function stopShow() {
  if (timerRunning) {
    clearTimeout(timerID);
    timerRunning = false;
  }
}
function showLine() {
  charMax = textLine.length;
  if (charNo <= charMax) {
    document.animationbutton.but.value = textLine.substring(0, charNo);
    document.animationbutton.but.style.color = "red";
    charNo++;
    timerID = setTimeout("showLine()", 100);
  }
  else {
    charNo = 0;
    timerID = setTimeout("showLine()", 3000);
  }
}
function gotoURL() {
  location.href = urlLine;
}
</script>
