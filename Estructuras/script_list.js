function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function updateIndices() {
    var table = document.getElementById("listaEnlazada");
    var cells = table.rows[0].cells;
    var numberOfCells = cells.length;

    for (var i = 0; i < numberOfCells; i++) {
        cells[i].getElementsByClassName("cellIndex")[0].innerText = i + 1;

        if (i === 0) {
            cells[i].getElementsByClassName("cellIndex")[0].innerText = "Head (" + (i+1) + ")";
        } 
        if (i === numberOfCells - 1 && numberOfCells > 1) {
            cells[i].getElementsByClassName("cellIndex")[0].innerText = "Tail (" + (i+1) + ")";
        }
    }

    // En caso de que haya solo un elemento, este será tanto la cabeza como la cola
    if (numberOfCells === 1) {
        cells[0].getElementsByClassName("cellIndex")[0].innerText = "Head & Tail";
    }
}

function addElementAtEnd() {
    var table = document.getElementById("listaEnlazada");
    var row = table.rows[0];
    var userInput = prompt("Introduzca un valor:");
    if (userInput === null || userInput.trim() === "") {
        alert("Por favor, introduzca un número válido.");
        return;
    }
    var cell = row.insertCell(-1);
    cell.className = 'fade-in';
    cell.innerHTML = '<div class="cellContent">' + userInput + '</div><div class="cellIndex"></div>';
    updateIndices();
    setCookie("endValue", userInput, 7);
}

function addElementAtBeginning() {
    var table = document.getElementById("listaEnlazada");
    var row = table.rows[0];
    var userInput = prompt("Introduzca un valor:");
    if (userInput === null || userInput.trim() === "") {
        alert("Por favor, introduzca un número válido.");
        return;
    }
    var cell = row.insertCell(0);
    cell.className = 'fade-in';
    cell.innerHTML = '<div class="cellContent">' + userInput + '</div><div class="cellIndex"></div>';
    updateIndices();
    setCookie("beginningValue", userInput, 7);
}

function deleteList() {
    var table = document.getElementById("listaEnlazada");
    var row = table.rows[0];
    row.innerHTML = "";
}

function removeLastElement() {
    var table = document.getElementById("listaEnlazada");
    var row = table.rows[0];
    if(row.cells.length > 0) {
        var lastCell = row.cells[row.cells.length - 1];
        lastCell.className = 'fade-out';
        setTimeout(function() {
            row.deleteCell(row.cells.length - 1);
            updateIndices();
        }, 500);
    }
}

function removeFirstElement() {
    var table = document.getElementById("listaEnlazada");
    var row = table.rows[0];
    if(row.cells.length > 0) {
        var firstCell = row.cells[0];
        firstCell.className = 'fade-out';
        setTimeout(function() {
            row.deleteCell(0);
            updateIndices();
        }, 500);
    }
}

function removeElementByPosition() {
    var position = prompt("Introduzca la posición del elemento:");
    var table = document.getElementById("listaEnlazada");
    var row = table.rows[0];
    position--;
    if (position === null) {
        return;
    }
    try {
        if(parseInt(position) < row.cells.length) {
            var cell = row.cells[parseInt(position)];
            cell.className = 'fade-out';
            setTimeout(function() {
                row.deleteCell(parseInt(position));
                updateIndices();
            }, 500);
        }else {
            alert("La posición está fuera de rango\n O no es válida.");
        }
    } catch (error) {
        alert("Asegúrese de ingresar una posición válida.");
    }
    updateIndices();
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