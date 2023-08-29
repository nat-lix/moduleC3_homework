function Technic (usage) {
    this.source = 'electricity'
    this.usage = usage
}

Technic.prototype.isOn = function(state) {
    console.log(`Your technic is ${state}!`)
}

Technic.prototype.isOff = function(state) {
    console.log(`Your technic is ${state}!`)
}

function TableLamp(brand, color, powerGet, cordLength) {
    this.brand = brand,
    this.color = color,
    this.powerGet = powerGet+"W",
    this.cordLength = cordLength+" m"
}

TableLamp.prototype = new Technic('domestic');

function PC(brand, powerGet, type, processor, memory) {
    this.brand = brand,
    this.powerGet = powerGet+"W",
    this.type = type,
    this.processor = processor,
    this.memory = memory+"Tb"
}

PC.prototype = new Technic('domestic');

const lamp1 = new TableLamp('Bosch', 'white', 500, 2);

const pc1 = new PC('Asus', '600', 'laptop', 'Intel', 1);

lamp1.isOff('off');
pc1.isOn('on');
console.log(lamp1);
console.log(pc1);

