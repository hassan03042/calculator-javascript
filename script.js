let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    animateDisplay();
}

function calculate() {
    try {
        display.value = eval(display.value);
        animateDisplay();
    } catch (error) {
        display.value = 'Error';
        animateDisplay();
    }
}

function animateDisplay() {
    display.classList.add('bounce');
    setTimeout(() => display.classList.remove('bounce'), 300);
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});
