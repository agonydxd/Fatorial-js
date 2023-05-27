function calc(){
    var fat = document.getElementById('fatnum')
    var res = document.getElementById('res')
    if(fat.value == 0 ){
        window.alert('[ERROR] verifique os dados e tente novamente')
    }else if(fat.value == 1){
        res.innerHTML= `o fatorial  de 1 é igual a ele mesmo'-'`
    }else{ 
        var f = Number(fat.value)
        var soma = 1
        res.innerHTML = `<p>O fatorial de ${f}:</p>`
        
        for(f;f > 0;f--){
            soma*=f  
            if(f != 1){
                res.innerHTML += `${f} x `
            }else {
                res.innerHTML += '1 ='
            }
         }
        res.style.textAlign = 'center'
        res.innerHTML += ` ${soma}`
    }
}
