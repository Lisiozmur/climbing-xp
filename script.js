const skalaFrancuska = document.getElementById("rFRA");
const skalaKurtyki = document.getElementById("rKUR");
const listaTrudnosci = document.getElementById("rPrice");
const nowaOpcja = document.createElement("option");

const stopnieFrancuskie = ["5a", "5b", "5c", "6a", "6a+", "6b"];
const stopnieKurtyki = ["IV", "V", "V+", "VI", "VI.1", "VI.1+"];

skalaKurtyki.addEventListener("change",function(){
    if(skalaKurtyki.checked){
        listaTrudnosci.innerHTML = "";
        for(const sKUR of stopnieKurtyki){
            const opcja  =document.createElement("option");
            opcja.textContent = sKUR;
            listaTrudnosci.appendChild(opcja);
        }
    }
});

skalaFrancuska.addEventListener("change", function(){
    if(skalaFrancuska.checked){
        listaTrudnosci.innerHTML="";
        
        for(const sFRA of stopnieFrancuskie){
            const opcja = document.createElement("option");
            opcja.textContent = sFRA;
            listaTrudnosci.appendChild(opcja); 
        }
    }
});