export class Personagem {
    constructor(
        protected name: string,
        protected ataque: number,
        protected vida: number
    ) {}

    atacar(personagem: Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque);
    } 

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(`${this.name} agora tem ${this.vida} de vida...`);
    }

    bordao(): void {
        console.log('Bordão')
    }
}

export class Guerreira extends Personagem {
    bordao(): void {
        console.log('Guerreira ao ataque');
    }
}
export class Monster extends Personagem {}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monster = new Guerreira('Monster', 50, 500);

guerreira.atacar(monster);
guerreira.atacar(monster);
guerreira.atacar(monster);
guerreira.atacar(monster);
monster.atacar(guerreira);