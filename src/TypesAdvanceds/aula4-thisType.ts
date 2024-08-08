export class Calculadora {
    constructor(
        public number: number
    ) {}

    soma(n: number): this {
        this.number += n;
        return this;
    }
    divisao(n: number): this {
        this.number /= n;
        return this;
    }
    subtracao(n: number): this {
        this.number -= n;
        return this;
    }
    multiplicacao(n: number): this {
        this.number *= n;
        return this;
    }
}

export class SubCalculadora extends Calculadora {
    pow(n: number): this {
        this.number **= n;
        return this;
    }
}

const calculadora = new SubCalculadora(10);
calculadora.soma(10).pow(2);
console.log(calculadora);

// Builder - GOf
export class RequestBuilder {
    private method: 'get' | 'post' | null = null;
    private url: string | null = null;

    setMethod(method: 'get' | 'post'): this {
        this.method = method;
        return this;
    }
    setUrl(url: string): this {
        this.url = url;
        return this;
    }
    send(): void {
        console.log(`Enviando dados via ${this.method} para ${this.url}`)
    }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com');
request.setMethod('post').send()