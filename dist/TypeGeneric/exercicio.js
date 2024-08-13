"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotationApp = exports.Votation = void 0;
var Votation = (function () {
    function Votation(details) {
        this.details = details;
        this._votationOptions = [];
    }
    Votation.prototype.addVotation = function (votationOption) {
        this._votationOptions.push(votationOption);
    };
    Votation.prototype.vote = function (voteIndex) {
        if (!this._votationOptions[voteIndex])
            return;
        this._votationOptions[voteIndex].votation++;
    };
    Object.defineProperty(Votation.prototype, "votationOption", {
        get: function () {
            return this._votationOptions;
        },
        enumerable: false,
        configurable: true
    });
    return Votation;
}());
exports.Votation = Votation;
var VotationApp = (function () {
    function VotationApp() {
        this.votations = [];
    }
    ;
    VotationApp.prototype.addVotation = function (votation) {
        this.votations.push(votation);
    };
    VotationApp.prototype.showVotation = function () {
        for (var _i = 0, _a = this.votations; _i < _a.length; _i++) {
            var votation = _a[_i];
            console.log(votation.details);
            for (var _b = 0, _c = votation.votationOption; _b < _c.length; _b++) {
                var votationOption = _c[_b];
                console.log(votationOption.option, votationOption.votation);
            }
            console.log("###");
            console.log("");
        }
    };
    return VotationApp;
}());
exports.VotationApp = VotationApp;
var votation1 = new Votation("Qual sua linguagem de programação favorita ?");
votation1.addVotation({ option: "Pyhton", votation: 0 });
votation1.addVotation({ option: "Javascript", votation: 0 });
votation1.addVotation({ option: "PHP", votation: 0 });
votation1.vote(1);
var votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.showVotation();
var votation2 = new Votation("Qual é a sua cor favorita ?");
votation2.addVotation({ option: "Preto", votation: 0 });
votation2.addVotation({ option: "Rosa", votation: 0 });
votation2.addVotation({ option: "Azul", votation: 0 });
votation2.vote(1);
var votationAppColor = new VotationApp();
votationAppColor.addVotation(votation2);
votationAppColor.showVotation();
