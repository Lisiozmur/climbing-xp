const skalaFrancuska = document.getElementById("rFRA");
const skalaKurtyki = document.getElementById("rKUR");
const listaTrudnosci = document.getElementById("rPrice");

const nazwaDrogi = document.getElementById("rName");
const formularz = document.getElementById("formula");

const wynikXP = document.getElementById("wynikXP");
const wynikNazwa = document.getElementById("wynikNazwa");
const wynikPunkty = document.getElementById("wynikPunkty");
const wynikSzczegoly = document.getElementById("wynikSzczegoly");

const stopnieFrancuskie = [
    "1","2","3","4a","4b","4c","5a", 
    "5b", "5c", "6a", "6a+", "6b","6b+",
    "6c","6c+","7a","7a+","7b","7b+",
    "7c","7c+","8a","8a+","8b","8b+",
    "8c","8c+","9a"
];
const stopnieKurtyki = [
    "I","II","III","IV","IV+","V-","V",
    "V+","VI-","VI","VI+","VI.1","VI.1+",
    "VI.2","VI.2+","VI.3","VI.3+","VI.4",
    "VI.4+","VI.5","VI.5+","VI.6","VI.6+",
    "VI.7"
];

const punktyFrancuskie ={
    "1":5,"2":10,"3":15,"4a":20,"4b":25,"4c":30,"5a":50,
    "5b":60,"5c":70,"6a":100,"6a+":120,"6b":140,"6b+":160,"6c":180,
    "6c+":200,"7a":230,"7a+":260,"7b":290,"7b+":320,"7c":350,"7c+":380,
    "8a":420,"8a+":460,"8b":500,"8b+":540,"8c":580,"8c+":620,"9a": 670
};

const punktyKurtyki = {
    "I": 5,"II": 10,"III": 15,"IV": 20,"IV+": 25,"V-": 30,"V": 40,
    "V+": 50,"VI-": 70,"VI": 100,"VI+": 120,"VI.1": 140,"VI.1+": 160,"VI.2": 180,
    "VI.2+": 200,"VI.3": 230,"VI.3+": 260,"VI.4": 290,"VI.4+": 320,"VI.5": 350,
    "VI.5+": 420,"VI.6": 460,"VI.6+": 540,"VI.7": 620
};

const mnoznikStylu = {
    OS: 1.5, F: 1.3,RP: 1,KK: 0.75,TR: 0.5
}

console.log(mnoznikStylu.OS);
console.log(punktyFrancuskie["6b"]);
console.log(punktyKurtyki["VI.3"]);

function ustawStopnie(stopnie){
    listaTrudnosci.innerHTML = "";
    for(const sT of stopnie){
        const oT  = document.createElement("option");
        oT.textContent = sT;
        listaTrudnosci.appendChild(oT);
    }
}

skalaFrancuska.addEventListener("change", function(){
    if(skalaFrancuska.checked){
        ustawStopnie(stopnieFrancuskie);
    }
});

skalaKurtyki.addEventListener("change",function(){
    if(skalaKurtyki.checked){
        ustawStopnie(stopnieKurtyki);
    }
});

ustawStopnie(stopnieFrancuskie);

formularz.addEventListener("submit",function(event){
    event.preventDefault();

    if(!nazwaDrogi.value.trim()){
        console.log("podaj nazwę drogi");
        return;
    }
    const wybranyStyl = document.querySelector('input[name="rStyle"]:checked');

    if(!wybranyStyl){
        console.log("Wybierz styl przejścia")
        return;
    }

    let punktyBazowe;

    if(skalaFrancuska.checked){
        punktyBazowe = punktyFrancuskie[listaTrudnosci.value];
    }
    else{
        punktyBazowe = punktyKurtyki[listaTrudnosci.value];
    }

    const mnoznik = mnoznikStylu[wybranyStyl.value];
    const zdobytePunkty = punktyBazowe*mnoznik;

    if(!Number.isFinite(zdobytePunkty)){
        console.log("BŁĄD XP");
        return;
    }


    wynikNazwa.textContent = nazwaDrogi.value.trim();
    wynikPunkty.textContent = `+${zdobytePunkty} XP`;
    wynikSzczegoly.textContent = `${listaTrudnosci.value} • ${wybranyStyl.value}`;

    console.log(nazwaDrogi.value);
    console.log(listaTrudnosci.value);
    console.log(wybranyStyl.value);
    console.log(mnoznik);
    console.log(punktyBazowe);
    console.log(zdobytePunkty);
});