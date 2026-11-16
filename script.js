const skalaFrancuska = document.getElementById("rFRA");
const skalaKurtyki = document.getElementById("rKUR");
const listaTrudnosci = document.getElementById("rPrice");

const stopnieFrancuskie = ["5a", "5b", "5c", "6a", "6a+", "6b"];
const stopnieKurtyki = ["IV", "V", "V+", "VI", "VI.1", "VI.1+"];

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