function display(myId, message) {
    document.getElementById(myId).innerHTML = message;
}

function loopMyArray() {
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

    let text = "";
    for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }

    return text;
}

function timesTable(tableNumber) {
    let text = '<h3 style="color:royalblue">Times Table of ' + tableNumber + '</h3>';
    for (let i = 1; i <= 12; i += 1) {
        const ans = tableNumber * i;
        text += tableNumber + ' X ' + i + ' = ' + ans + '<br>';
    }
    return text;
}

function changeColor(mycolor) {
    document.querySelector('.olumide').style.color = mycolor;
}

function changeButtonsColor(mycolor) {
    const mybuttons = document.getElementsByTagName('button');
    console.log('buttons',mybuttons);

    for (let index = 0; index < mybuttons.length; index++) {
        const mybutton = mybuttons[index];
        mybutton.style.color = mycolor;
        mybutton.innerHTML = 'Button ' + (index+1);
        mybutton.style.backgroundColor = 'yellow';
    }
}