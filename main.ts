basic.forever(function () {
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 0, 255)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 50, 200)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 100, 150)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 150, 100)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 200, 50)
    basic.pause(1000)
    Tinybit.CarCtrlSpeed2(Tinybit.CarState.Car_Run, 255, 0)
    basic.pause(1000)
})
basic.forever(function () {
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    Tinybit.RGB_Car_Big2(37, 36, 255)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    Tinybit.RGB_Car_Big2(53, 56, 42)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    Tinybit.RGB_Car_Big2(24, 66, 38)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.White))
    Tinybit.RGB_Car_Big2(214, 244, 0)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Black))
    Tinybit.RGB_Car_Big2(123, 234, 233)
})
