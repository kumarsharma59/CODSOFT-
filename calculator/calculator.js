const display = document.getElementById("result");

function appendCharacter(char) {
    if (display.value === "0") {
        display.value = char;
    } else {
        display.value += char;
    }
}

function ClearDisplay(){
    display.value = "";
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try{
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}