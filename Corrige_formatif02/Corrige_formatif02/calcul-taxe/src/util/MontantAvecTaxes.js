import { calculTPS, calculTVQ } from './Mathematique';

export class MontantAvecTaxes {

    constructor(annee, montantSansTaxe) {
        this.annee = annee;
        this.montantSansTaxe = montantSansTaxe;
        this.tps = calculTPS(annee, montantSansTaxe);
        this.tvq = calculTVQ(annee, montantSansTaxe);
        this.montantAvecTaxe = parseFloat(this.montantSansTaxe) + parseFloat(this.tps) + parseFloat(this.tvq)
    }

    getMontantSansTaxe() {
        return this.montantSansTaxe;
    }

    getTPS() {
        return this.tps;
    }

    getTVQ() {
        return this.tvq;
    }

    getMontantAvecTaxe() {
        return this.montantAvecTaxe;
    }

    getYear() {
        return this.annee
    }
}

