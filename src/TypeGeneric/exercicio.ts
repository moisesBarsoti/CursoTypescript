export type VotationOption = {
    votation: number;
    option: string;
}

export class Votation {
    private _votationOptions: VotationOption[] = [];
    constructor(public details: string) {}

    addVotation(votationOption: VotationOption): void {
        this._votationOptions.push(votationOption);
    }

    vote(voteIndex: number): void {
        if(!this._votationOptions[voteIndex]) return;
        this._votationOptions[voteIndex].votation++;
    }

    get votationOption(): VotationOption[] {
        return this._votationOptions;
    }
}

export class VotationApp {;
    private votations: Votation[] = [];

    addVotation(votation: Votation): void {
        this.votations.push(votation);
    }

    showVotation(): void {
        for (const votation of this.votations) {
            console.log(votation.details)
            for (const votationOption of votation.votationOption) {
                console.log(votationOption.option, votationOption.votation)
            }
            console.log("###");
            console.log("");
        }
    }
}

// Linguagens
const votation1 = new Votation("Qual sua linguagem de programação favorita ?");
votation1.addVotation({option: "Pyhton", votation: 0});
votation1.addVotation({option: "Javascript", votation: 0});
votation1.addVotation({option: "PHP", votation: 0});
votation1.vote(1);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.showVotation();

// Color
const votation2 = new Votation("Qual é a sua cor favorita ?");
votation2.addVotation({option: "Preto", votation: 0});
votation2.addVotation({option: "Rosa", votation: 0});
votation2.addVotation({option: "Azul", votation: 0});
votation2.vote(1);

const votationAppColor = new VotationApp();
votationAppColor.addVotation(votation2);
votationAppColor.showVotation();