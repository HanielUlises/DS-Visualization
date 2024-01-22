function updateIndices() {
    var table = document.getElementById("listaEnlazada");
    var rows = table.rows;
    var numberOfRows = rows.length;

    for (var i = 0; i < numberOfRows; i++) {
        if (i === 0) {
          rows[i].getElementsByClassName("cellIndex")[0].innerText = "Last";
        } else if (i === numberOfRows - 1) {
          rows[i].getElementsByClassName("cellIndex")[0].innerText = "First";
        } else {
          rows[i].getElementsByClassName("cellIndex")[0].innerText = numberOfRows - i;
        }
    }
}

function addRowAtBeginning() {
    var table = document.getElementById("listaEnlazada");
    var userInput = prompt("Introduzca un valor:");
    if (userInput === null || userInput.trim() === "") {
        alert("Por favor, introduzca un número válido.");
        return;
    }
    var row = table.insertRow(0);
    row.className = 'fade-in';
    var cell1 = row.insertCell(0);
    cell1.innerHTML = '<div class="cellContent">' + userInput + '</div><div class="cellIndex"></div>';
    updateIndices();
}
function deleteList() {
    var table = document.getElementById("listaEnlazada");
    table.innerHTML = "";
}

function removeLastRow() {
  var table = document.getElementById("listaEnlazada");
  var rowCount = table.rows.length;
  if (rowCount > 0) {
      var lastRow = table.rows[rowCount - 1];
      lastRow.className = 'fade-out';
      setTimeout(function() {
          table.deleteRow(rowCount - 1);
          updateIndices();
      }, 500);
  }
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("code-block");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}