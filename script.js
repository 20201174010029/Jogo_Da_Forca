const words = ['abacaxi', 'morango', 'uva', 'manga'];
let chosenWord = '';
let guessedWord = '';
let wrongLetters = [];
let hangmanStatus = 0;

function chooseWord() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = '_'.repeat(chosenWord.length);
    document.getElementById('word-display').textContent = guessedWord;
}

function displayGuessedLetters() {
    document.getElementById('letters-used').textContent = `incorreto: ${wrongLetters.join(', ')}`;
}

function guessLetter() {
    const input = document.getElementById('letter-input').value.toLowerCase();
    if (input.length !== 1 || !/[a-z]/.test(input)) {
        alert('Uma letra de cada vez, por favor.');
        return;
    }
    if (guessedWord.includes(input) || wrongLetters.includes(input)) {
        alert('Você já tentou esta letra, tente outra.');
        return;
    }
    if (chosenWord.includes(input)) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === input) {
                guessedWord = guessedWord.substring(0, i) + input + guessedWord.substring(i + 1);
            }
        }
        document.getElementById('word-display').textContent = guessedWord;
        if (!guessedWord.includes('_')) {
            document.getElementById('result').textContent = 'Você é nota 10 mano(a)!';
        }
    } else {
        wrongLetters.push(input);
        displayGuessedLetters();
        hangmanStatus++;
        drawHangman();
        if (hangmanStatus === 6) {
            document.getElementById('result').textContent = 'Pensei que voçê fosse melhor do que isso hahaha!';
        }
    }
}


function desenharForca() {
    const partesForca = ['cabeça', 'corpo', 'braço esquerdo', 'braço direito', 'perna esquerda', 'perna direita'];
    document.getElementById('hangman').textContent = `Forca: ${partesForca.slice(0, statusForca).join(', ')}`;
}
chooseWord();

