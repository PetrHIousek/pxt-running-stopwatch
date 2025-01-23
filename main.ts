let running = false
let timeInSeconds = 0

basic.showString("Ready")

// Funkce pro měření času
basic.forever(function () {
    if (running) {
        basic.pause(1000) // Čeká 1 sekundu
        timeInSeconds++ // Počítá celé sekundy
        whaleysans.showNumber(timeInSeconds) // Zobrazuje celé sekundy
    }
})

// Při stisku tlačítka A začnou stopky měřit
input.onButtonPressed(Button.A, function () {
    if (!running) {
        running = true
        timeInSeconds = 0 // Resetuje čas na začátku měření
    }
})

// Při stisku tlačítka B se stopky zastaví a ukážou čas
input.onButtonPressed(Button.B, function () {
    if (running) {
        running = false
        whaleysans.showNumber(timeInSeconds) // Zobrazení počtu sekund
        basic.clearScreen()
        basic.pause(1000)
        basic.showString("sekund")
    }
})
