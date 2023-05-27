function calc(){
    var fat = document.getElementById('fatnum')
    var res = document.getElementById('res')
    if(fat.value == 0 ){
        window.alert('[ERROR] verifique os dados e tente novamente')
    }else if(fat.value == 1){
        res.innerHTML= `o fatorial  de 1 é igual a ele mesmo'-'`
    }else{ 
        var soma = 1
        for(var i = 1 ; i < f;i++){
            soma*=i
        }
        }
        res.innerHTML = `${soma}`
        }