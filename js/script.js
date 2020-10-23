// creo array cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

console.log(listaCognomi);



// stampo la lista ordinata per cognome
var button = document.getElementById('check-button');
button.addEventListener("click" , 

function () {
    // chiedo all'utente il cognome
    var askName = document.getElementById('ask-name');

    console.log("Il nome inserito è: ", askName.value);

    // pusho il cognome inserito dall'utente nell' array
    listaCognomi.push(askName.value);
    console.log(listaCognomi);

    //stampo posizione lista ordinata
    listaCognomi.sort();
    console.log("Lista ordinata: ", listaCognomi);

    document.getElementById("lista").innerHTML = "La lista dei cognomi è: " + "<br>" + listaCognomi;

    
    
    // stampo posizione lista
    var positionList = listaCognomi.indexOf(askName.value);
    console.log("La tua posizione è la numero: " , positionList + 1);

    document.getElementById('position').innerHTML ="posizione numero: " + (positionList + 1); 







    }

)
