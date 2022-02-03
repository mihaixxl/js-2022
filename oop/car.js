var car = {
    make: 'Audi',
    model: 'A4',
    year: 2012,
    color: 'white',
    batteryCapacity: 100,
    averangeConsumtion: 8,
    batteryCharge: 100,

    drive: function (distance) {
        this.batteryCharge -= 8 * distance / 100
        document.write('Driving car')
    },
    fullCharge: function () {
        this.batteryCharge = this.batteryCapacity
    },
    paint: function (color) {
        this.color = color
    }

}

document.write('The color is ' + car.color + '<br>')
car.paint('Red')
document.write('The color is ' + car.color + '<br>')
car.drive(300)
document.write('Charge: ' + car.batteryCharge + '<br>')
car.fullCharge()
document.write('Charge: ' + car.batteryCharge + '<br>') 