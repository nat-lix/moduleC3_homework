class Technic {
    constructor (source, usage) {
        this.source = source;
        this.usage = usage;
    }
    isOn () {
        console.log(`Your technic is on!`)
        this.isOn = true;
    }
    
    isOff () {
        console.log(`Your technic is off!`)
        this.isOff = true;
    }

}

class TableLamp extends Technic {
    constructor (source, usage, brand, color, powerGet, cordLength) {
        super (source, usage);
        this.brand = brand;
        this.color = color;
        this.powerGet = powerGet+"W";
        this.cordLength = cordLength+" m";
    }
}

class PC extends Technic {
    constructor (source, usage, brand, powerGet, type, processor, memory) {
        super (source, usage);
        this.brand = brand;
        this.powerGet = powerGet+"W";
        this.type = type;
        this.processor = processor;
        this.memory = memory+"Tb";
    }
}

const lamp1 = new TableLamp('electricity', 'domestic', 'Bosch', 'white', 500, 2);

const pc1 = new PC('electricity', 'domestic', 'Asus', '600', 'laptop', 'Intel', 1);

lamp1.isOff();
pc1.isOn();
console.log(lamp1);
console.log(pc1);

