adiciona1 = document.querySelector(".n_volume")
for(var i = 0; i < adiciona1.length ; i++){
    
    var adiciona = adiciona1[i];

    var tdVolume = adiciona.querySelector(".n_volume");
    var volume = tdVolume.textContent;

    var apvOuRpv = document.querySelector(".apvOuRpv")

    if(!volume){
        volume = false;
        apvOuRpv.textContent = "Você foi reprovado!";
    }

}

function validaProvra(volume){
    if(volume >= 0 && volume <= 6){
        return true;
    }else{
        return false;
    }
}  

