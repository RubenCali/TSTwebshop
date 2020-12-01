describe('snoep eigenschappen testen doen', function() {
    it('Klopt de prijs van snoep', function () {
        let snoep = new Snoep();
   
        expect(snoep.getPrice()).toBe(2.45);
    });
    it('Klopt het totaal bedrag', function () {
        let snoep = new Snoep();
   
        expect(snoep.getTotaalBedrag()).toBe(0);
    });
    it('klopt de smaak van snoep', function () {
        let snoep = new Snoep();
   
        expect(snoep.getSmaak()).toBe('zoet');
    });
    it('klopt de structuur van snoep', function () {
        let snoep = new Snoep();
   
        expect(snoep.getStructuur()).toBe('hard');
    });
    it('klopt de houdbaarheidsdatum van de snoep', function () {
        let snoep = new Snoep();
   
        expect(snoep.getHoudbaardsdatum()).toBe('16-7-2021');
    });
    it('klopt de kleur van de snoep', function () {
        let snoep = new Snoep();
   
        expect(snoep.getkleur()).toBe('rood');
    });
});

function Snoep() {
    let prijs = 2.45;
    let totaalBedrag = 0;
    const smaak = 'zoet';
    const structuur = 'hard';
    const houdbaarheidsdatum = '16-7-2021';
    const kleur = 'rood';

    this.getPrice = function (){
        return prijs;
    }
    this.getTotaalBedrag = function (){
        return totaalBedrag;
    }
    this.getSmaak = function (){
        return smaak;
    }
    this.getStructuur = function (){
        return structuur;
    }
    this.getHoudbaardsdatum = function (){
        return houdbaarheidsdatum;
    }
    this.getkleur = function (){
        return kleur;
    }
   

    // this.berekenSnoepTotaal = function (aantal) {
    //     totaalBedrag =  prijs * aantal;
    // }

    // this.getTotaal = function () {
    //     return totaalBedrag;
    // }

    // this.berekenSnoepTotaal(aantal);
}