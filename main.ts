enum State {
    ready,
    running,
    finish
}

radio.setGroup(69)
let state: State = State.ready;
let startTimestamp = 0
basic.pause(100)
Sensors.SetLightLevel()

radio.onReceivedNumber(function (receivedNumber: number) {
    if (receivedNumber == 0) {
        if (state === State.ready) {
            state = State.running
            startTimestamp = input.runningTime()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    Sensors.SetLightLevel()
})

Sensors.OnLightDrop(function () {
    if (state === State.running) {
        let elapsedTime = input.runningTime() - startTimestamp

        radio.sendValue("elapsedTime", elapsedTime)
        state = State.finish
        basic.showNumber(elapsedTime)
    }
})

