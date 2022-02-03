document.querySelector('input[type="button"]').addEventListener('click', check)
var result = document.querySelector('#result')

// genereaza un numar aleatoriu intre 0 si 100
// un query returneaza o valoare(folosind return)
var chosenNumber = randomNumber(100)
function randomNumber(max) {
  return Math.round(Math.random() * max)
}
// command
function check() {
    let checkedNumber = document.querySelector('#number').value

    if (chosenNumber == checkedNumber) {
        result.innerText = 'Ai ghicit!'
    } else if (chosenNumber > checkedNumber) {
        result.innerText = 'Prea mic'
    } else {
        result.innerText = 'Prea mare'
    }
}
