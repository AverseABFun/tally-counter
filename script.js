var counterValue = 0;
function increase() {
    counterValue++;
    document.getElementById("counter").innerHTML = counterValue.toString();
}
function decrease() {
    counterValue--;
    document.getElementById("counter").innerHTML = counterValue.toString();
}
function reset() {
    counterValue = 0;
    document.getElementById("counter").innerHTML = counterValue.toString();
}