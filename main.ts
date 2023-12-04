radio.onReceivedString(function (receivedString) {
    if (receivedString == "DUCK") {
        basic.showIcon(IconNames.Duck)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("DUCK")
})
radio.setGroup(23)
