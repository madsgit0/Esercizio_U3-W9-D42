"use strict";
class MadreAccount {
    constructor() {
        this.saldo = 0;
    }
    versamento(importo) {
        this.saldo += importo;
        this.aggiungiInteresse();
    }
    prelievo(importo) {
        if (this.saldo >= importo) {
            this.saldo -= importo;
        }
        else {
            console.log("non puoi prendere nulla");
        }
    }
    stampaSaldo() {
        console.log(this.saldo);
    }
    aggiungiInteresse() {
        this.saldo += this.saldo * 0, 1;
    }
}
class FiglioAccount extends MadreAccount {
    versamento(importo) {
        this.saldo += importo;
    }
}
let madre = new MadreAccount();
let figlio = new FiglioAccount();
madre.stampaSaldo();
figlio.stampaSaldo();
madre.versamento(100);
figlio.versamento(40);
madre.prelievo(50);
figlio.prelievo(30);
madre.prelievo(50);
figlio.prelievo(30);
madre.stampaSaldo();
figlio.stampaSaldo();
