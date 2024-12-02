input.onButtonPressed(Button.A, function () {
    radio.sendString("Hola. Hola.")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
