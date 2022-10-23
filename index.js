let saveBirdsEl = document.getElementById("save-birds-el")
let countBirdsEl = document.getElementById("count-birds-el")
let countBirds = 0

function incrementBirds() {
    countBirds += 1
    countBirdsEl.textContent = countBirds
}

function saveBirds() {
    let countStr = countBirds + "🐦 - "
    saveBirdsEl.textContent += countStr
    countBirdsEl.textContent = 0
    countBirds = 0
}