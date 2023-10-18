addEventListener('message',(dataRecu)=>{
    //data recu en paramètre

    let data = dataRecu.data;

    //temps calculé
    let before = new Date().getTime()
    //function appelé
    let processedDataNumber = processData(data,0);
    let after = new Date().getTime() - before;

    this.self.postMessage({ data:processedDataNumber,temps:after })
});

 //diminue recursivement par .01 jusqua 0 et compte le nombre de fois qu'il le fait
function processData(data,nbFois){ 

    if(data<=0){
        return nbFois;
    }
    else{
        let number = parseFloat(data - 0.01)
        let nb = parseInt(nbFois +1)
        return processData(number,nb);
    }
}
