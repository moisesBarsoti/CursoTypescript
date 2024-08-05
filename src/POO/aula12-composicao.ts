// Composição - Um outro objeto, faz parte de outro objeto

export class Carro {
    private readonly motor = new Motor();

    ligar(): void {
        this.motor.ligar();
    }

    acelerar(): void {
        this.motor.acelerar();
    }

    frear(): void {
        this.motor.frear();
    }

    desligar(): void {
        this.motor.desligado();
    }
}

export class Motor {
    ligar(): void {
        console.log('O carro está ligando');
    }

    acelerar(): void {
        console.log('O carro está acelerando');
    }

    frear(): void {
        console.log('O carro está freando');
    }

    desligado(): void {
        console.log('O carro está ligando');
    }
}

const carro1 = new Carro();
carro1.ligar();
carro1.acelerar();
carro1.frear();
carro1.desligar();