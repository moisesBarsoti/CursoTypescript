export abstract class Personagem {
    protected abstract emoji: string;

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

    abstract bordao(): void;
}

export class Guerreira extends Personagem {
    protected emoji = '\u00f0';
    bordao(): void {
        console.log(this.emoji + 'Guerreira ao ataque');
    }
}
export class Monster extends Personagem {
    protected emoji = '\u00f0';
    bordao(): void {
        console.log(this.emoji + 'Monstro ao ataque');
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monster = new Monster('Monster', 50, 500);

guerreira.atacar(monster);
guerreira.atacar(monster);
guerreira.atacar(monster);
guerreira.atacar(monster);
monster.atacar(guerreira);