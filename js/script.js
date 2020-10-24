// creo array cognomi
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

console.log(listaCognomi);

// creo bottone variabile
var button = document.getElementById('check-button');

//collego event click a button
button.addEventListener("click" , 
    function () {
        // chiedo all'utente il cognome
        var askName = document.getElementById('ask-name');
        
        console.log("Il nome inserito è: ", askName.value);

        //verifico nome inserito dall'utente che abbia iniziale maiusc e non sia vuoto
        if (askName.value.charAt(0) === askName.value.charAt(0).toUpperCase() && askName.value !== "") {

        // pusho il cognome inserito dall'utente nell' array
        listaCognomi.push(askName.value);
        console.log(listaCognomi);

        //ordino e stampo lista ordinata in log
        console.log("Lista non ordinata: ", listaCognomi);

        //variabile per loop lista nomi
        var testostampato = "";

        //ciclo per traversare nomi lista
        for (var i = 0; i < listaCognomi.length; i++) {

            console.log(listaCognomi[i]);

            testostampato = testostampato + "<li>" + listaCognomi[i] + "</li>";
        }

        //stampo lista in <li>
        document.getElementById("lista-2").innerHTML = testostampato;

        console.log(testostampato);
        
        // stampo posizione lista
        var positionList = listaCognomi.indexOf(askName.value);
        console.log("La tua posizione è la numero: " , positionList + 1);

        document.getElementById('position-2').innerHTML ="posizione numero: " + (positionList + 1); 

        // chiedo all'utente il cognome
        var askName = document.getElementById('ask-name');

        console.log("Il nome inserito è: ", askName.value);

        // pusho il cognome inserito dall'utente nell' array
        console.log(listaCognomi);

        //ordino e stampo lista ordinata in log
        listaCognomi.sort();
        console.log("Lista ordinata: ", listaCognomi);

        //variabile per loop lista nomi
        var testostampato = "";

        //ciclo per traversare nomi lista
        for (var i = 0; i < listaCognomi.length; i++) {

            console.log(listaCognomi[i]);

            testostampato = testostampato + "<li>" + listaCognomi[i] + "</li>";
        }

        //stampo lista in <li>
        document.getElementById("lista").innerHTML = testostampato;

        console.log(testostampato);

        // stampo posizione lista
        var positionList = listaCognomi.indexOf(askName.value);
        console.log("La tua posizione è la numero: ", positionList + 1);

        document.getElementById('position').innerHTML = "posizione numero: " + (positionList + 1);
    }

    else {
            alert("Attenzione inserisci il nome utente con la prima lettera Maiuscola");
    }
    
   }
)
