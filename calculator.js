function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        const expression = display.value;
        // Use a safer evaluation method instead of eval
        const result = safeEvaluate(expression);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function deleteLastCharacter() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Removes the last character
}

// A simple safe evaluator for basic arithmetic expressions
function safeEvaluate(expr) {
    // Only allow digits, operators, parentheses, and decimal points
    if (!/^[0-9+\-*/%.() ]+$/.test(expr)) {
        throw new Error("Invalid characters in expression");
    }
    // Use Function constructor to evaluate expression safely
    // This is safer than eval but still limited to arithmetic expressions
    return Function('"use strict";return (' + expr + ')')();
}
