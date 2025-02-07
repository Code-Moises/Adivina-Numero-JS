const numero = Math.floor(Math.random()*100) + 1;
const guess = document.getElementById('guessInput');
const msg = document.getElementById('mensaje');

function checkGuess() {
    let num = parseInt(guess.value);
    if (num < 1 || num > 100 || isNaN(num)) {
        msg.textContent = 'El numero ingresado no es válido';
        msg.style.color = 'black';
        return
    }
    if (num === numero) {
        msg.textContent = 'Felicidades has adivinado el número: ' + numero + '!!';
        msg.style.color = 'green';
        guess.disabled = true;
    }else if (num < numero) {
        msg.textContent = 'El numero es MAYOR';
        msg.style.color = 'red';
    }else {
        msg.textContent = 'El numero es MENOR';
        msg.style.color = 'red';
    }
}


