angular.module('SolarApp', [])

function nextBox(inputBox) {
  if (inputBox.value.length == inputBox.maxLength) {
    var next = inputBox.tabIndex;
    if (next < document.getElementsByClassName("dateEntry").length) {
      elements = document.getElementsByClassName("dateEntry")
      for (i = 0; i < elements.length; i++) {
        elements[next].focus();
      }
    }
  }
}