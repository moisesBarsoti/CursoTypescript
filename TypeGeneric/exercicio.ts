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
}

export class VotationApp {;
    private votations: Votation[] = [];

    addVotation(votation: Votation): void {
        this.votations.push(votation);
    }

    showVotation(): void {
        for (const votation of this.votations) {
            console.log(votation.details)
        }
    }
}


const votation1 = new Votation("Qual sua linguagem de programação favorita");
votation1.addVotation({option: "Pyhton", votation: 0});
votation1.addVotation({option: "Javascript", votation: 0});
votation1.addVotation({option: "PHP", votation: 0});

const votationApp = new Votation();