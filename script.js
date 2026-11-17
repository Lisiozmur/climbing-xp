const skalaFrancuska = document.getElementById("rFRA");
const skalaKurtyki = document.getElementById("rKUR");
const listaTrudnosci = document.getElementById("rPrice");

const nazwaDrogi = document.getElementById("rName");
const formularz = document.getElementById("formula");

const stopnieFrancuskie = ["1","2","3","4a","4b","4c","5a", "5b", "5c", "6a", "6a+", "6b","6b+","6c","6c+","7a","7a+","7b","7b+","7c","7c+","8a","8a+","8b","8b+","8c","8c+","9a"];
const stopnieKurtyki = ["I","II","III","IV","IV+","V-","V","V+","VI-","VI","VI+","VI.1","VI.1+","VI.2","VI.2+","VI.3","VI.3+","VI.4","VI.4+","VI.5","VI.5+","VI.6","VI.6+","VI.1","VI.7"];

nazwaDrogi.addEventListener("input", function(){
    console.log(nazwaDrogi.value);
});

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
        console.log(nazwaDrogi.value);
        console.log(listaTrudnosci.value);
        if(wybranyStyl){
            console.log(wybranyStyl.value);
            
        }
    });