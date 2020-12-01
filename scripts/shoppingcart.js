function Dagomzet() {
    let omzet = 0;

    this.voegToeAanDagomzet = function (klantTotaal) {
        omzet = omzet + klantTotaal;
    }

}

function Winkelmand() {
    let totaalBedrag = 0;

    this.getTotaalBedrag = function () {
        return totaalBedrag;
    }

    this.vulWinkelmand = function (aantalSnoep, aantalChocola, aantalKoek) {

        let snoep = new Snoep(aantalSnoep);
        let chocola = new Chocola(aantalChocola);
        let koek = new Koek(aantalKoek);

        this.setWinkelmandBedrag(snoep, chocola, koek);
    }

    this.setWinkelmandBedrag = function (snoep, chocola, koek) {
        totaalBedrag = totaalBedrag + snoep.getTotaal();
    }

}

function Snoep() {
    let prijs = 2.45;
    let totaalBedrag = 0;
    const smaak = 'zoet';
    const structuur = 'hard';
    const houdbaarheidsdatum = '16-7-2021';
    const kleur = 'rood';

    // this.berekenSnoepTotaal = function (aantal) {
    //     totaalBedrag =  prijs * aantal;
    // }

    // this.getTotaal = function () {
    //     return totaalBedrag;
    // }

    // this.berekenSnoepTotaal(aantal);
}

function Koek() {
    let prijs = 2.45;
    let totaalBedrag = 0;
    const smaak = 'zoet';
    const structuur = 'hard';
    const houdbaarheidsdatum = '16-7-2021';
    const kleur = 'rood';
}

function Chocola() {
    let prijs = 2.45;
    let totaalBedrag = 0;
    const smaak = 'zoet';
    const structuur = 'hard';
    const houdbaarheidsdatum = '16-7-2021';
    const kleur = 'rood';
}

function Klant() {
    let winkelmand = new Winkelmand();

    this.wijzigAankopen = function (snoep, chocola, koek) {
       winkelmand.vulWinkelmand(snoep, chocola, koek);
    };

    this.teBetalen = function () {
        return winkelmand.getTotaalBedrag();
    }
}

let klant = new Klant();
klant.wijzigAankopen(20,1,1);
console.log('Totaalbedrag in winkelmand: ' + klant.teBetalen());

let dagomzet = new Dagomzet();
console.log('De totale dagomzet bedraagt: ' + 0 );
